import db from '../config/config-db';
import Customer from '../Dto/Customer-Dto/RegisterCustomerDto';
import DeleteCustomer from '../Dto/Customer-Dto/DeleteCustomersDto';
import UpdateCustomer from '../Dto/Customer-Dto/UpdateCustomerDto';
import PasswordReset from '../Dto/Customer-Dto/PasswordResetDto';
import Auth from '../Dto/AuthDto';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';

class CustomerRepository {
    private static codigosVerificacion = new Map<string, { codigo: string, timestamp: number }>();
    private static CODIGO_EXPIRACION = 10 * 60 * 1000; // 10 minutos en milisegundos

    static async login(auth: Auth) {
        try {
            const sql = 'SELECT id_cliente, contraseña FROM cliente WHERE Email=?';
            const values = [auth.Email];
            const result: any = await db.execute(sql, values);
            
            if (!result || !result[0] || result[0].length === 0) {
                return { logged: false, status: "Invalid username or password" };
            }

            const storedPassword = result[0][0].contraseña;
            const providedPassword = auth.contraseña;

            if (!storedPassword || !providedPassword) {
                return { logged: false, status: "Invalid username or password" };
            }

            // Asegurarse de que storedPassword sea una cadena
            const storedPasswordStr = storedPassword.toString();
            
            try {
                const isPasswordValid = await bcrypt.compare(providedPassword, storedPasswordStr);
                
                if (isPasswordValid) {
                    return { 
                        logged: true, 
                        status: "Successful authentication", 
                        id: result[0][0].id_cliente, 
                        role: "customer" 
                    };
                }
            } catch (compareError) {
                return { logged: false, status: "Error en la autenticación" };
            }
            
            return { logged: false, status: "Invalid username or password" };
        } catch (error) {
            console.error('Error en login:', error);
            return { logged: false, status: "Error de conexión con la base de datos" };
        }
    }

    static async add(customer: Customer){
        try {
            const hashedPassword = await bcrypt.hash(customer.contraseña, 10);
            const sql = 'INSERT INTO cliente (Nombres, Apellidos, Email, contraseña) VALUES (?, ?, ?, ?)';
            const values = [customer.Nombres, customer.Apellidos, customer.Email, hashedPassword];        
            return db.execute(sql, values);
        } catch (error) {
            console.error('Error en add:', error);
            throw error;
        }
    }

    static async deleteCustomer(deleteCustomer : DeleteCustomer){
      const sql = 'DELETE FROM cliente WHERE Apellidos = ? AND Email = ?';
      const values = [deleteCustomer.Apellidos, deleteCustomer.Email];
      return db.execute(sql,values);
    }

    static async UpdateCustomer(customer: UpdateCustomer) {
        const connection = await db.getConnection();
        try {
            await connection.beginTransaction();
            
            console.log('Actualizando cliente con ID:', customer.id_cliente);
    
            // Update customer basic info
            let sql = 'UPDATE cliente SET Nombres = ?, Apellidos = ?, Email = ? WHERE id_cliente = ?';
            let values = [customer.Nombres, customer.Apellidos, customer.Email, customer.id_cliente];
    
            // If password is provided, update it
            if (customer.contraseña) {
                sql = 'UPDATE cliente SET Nombres = ?, Apellidos = ?, Email = ?, contraseña = ? WHERE id_cliente = ?';
                values = [customer.Nombres, customer.Apellidos, customer.Email, customer.contraseña, customer.id_cliente];
            }
    
            const [updateResult]: any = await connection.execute(sql, values);
            console.log('Resultado de la actualización:', updateResult);
    
            if (updateResult.affectedRows === 0) {
                throw new Error('Cliente no encontrado');
            }
    
            // Update or insert phone number if provided
            if (customer.numeroTelefono && customer.tipo) {
                const [phoneResult]: any = await connection.execute(
                    'SELECT id_telefono FROM Telefono WHERE id_cliente = ?',
                    [customer.id_cliente]
                );
    
                if (phoneResult.length > 0) {
                    // Update existing phone
                    await connection.execute(
                        'UPDATE Telefono SET númeroTelefono = ?, tipo = ? WHERE id_cliente = ?',
                        [customer.numeroTelefono, customer.tipo, customer.id_cliente]
                    );
                } else {
                    // Insert new phone
                    await connection.execute(
                        'INSERT INTO Telefono (númeroTelefono, tipo, id_cliente) VALUES (?, ?, ?)',
                        [customer.numeroTelefono, customer.tipo, customer.id_cliente]
                    );
                }
            }
    
            await connection.commit();
            
            // Get updated customer data
            const [customerData]: any = await connection.execute(
                'SELECT c.*, t.númeroTelefono as numeroTelefono, t.tipo as tipoTelefono FROM cliente c LEFT JOIN Telefono t ON c.id_cliente = t.id_cliente WHERE c.id_cliente = ?',
                [customer.id_cliente]
            );
    
            return customerData[0];
        } catch (error) {
            await connection.rollback();
            throw error;
        } finally {
            connection.release();
        }
    }

    static async solicitarResetPassword(resetData: PasswordReset) {
        // Verificar si el email existe
        const [result]: any = await db.execute(
            'SELECT id_cliente FROM cliente WHERE Email = ?',
            [resetData.Email]
        );

        if (result.length === 0) {
            throw new Error('Email no encontrado');
        }

        // Generar código de 6 dígitos
        const codigo = Math.floor(100000 + Math.random() * 900000).toString();
        
        // Almacenar código con timestamp
        this.codigosVerificacion.set(resetData.Email, {
            codigo,
            timestamp: Date.now()
        });

        // Configurar transporter de email (ajusta según tu configuración)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Enviar email
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: resetData.Email,
            subject: 'Código de recuperación de contraseña',
            text: `Tu código de verificación es: ${codigo}\nEste código expirará en 10 minutos.`
        });

        return { success: true, message: 'Código de verificación enviado' };
    }

    static async verificarCodigoYResetearPassword(resetData: PasswordReset) {
        const codigoAlmacenado = this.codigosVerificacion.get(resetData.Email);

        if (!codigoAlmacenado) {
            throw new Error('No hay código de verificación pendiente');
        }

        if (Date.now() - codigoAlmacenado.timestamp > this.CODIGO_EXPIRACION) {
            this.codigosVerificacion.delete(resetData.Email);
            throw new Error('El código ha expirado');
        }

        if (codigoAlmacenado.codigo !== resetData.codigo) {
            throw new Error('Código inválido');
        }

        // Si el código es válido, actualizar la contraseña
        const hashedPassword = await bcrypt.hash(resetData.nuevaContraseña!, 10);
        await db.execute(
            'UPDATE cliente SET contraseña = ? WHERE Email = ?',
            [hashedPassword, resetData.Email]
        );

        // Limpiar el código usado
        this.codigosVerificacion.delete(resetData.Email);

        return { success: true, message: 'Contraseña actualizada exitosamente' };
    }
}

export default CustomerRepository;