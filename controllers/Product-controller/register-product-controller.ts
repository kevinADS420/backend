import { Request, Response } from "express"; 
import Product from "../../Dto/Product-Dto/RegisterProductDto";
import ProductService from "../../services/ProductService";
import db from "../../config/config-db";
import { ResultSetHeader } from 'mysql2';

const productService = new ProductService();

const register = async (req: Request, res: Response) => {
    let connection;
    try {
        const {
            nombreP,
            tipo,
            Precio,
            cantidad,
            imagen,
            id_proveedor
        } = req.body;

        if (!req.file) {
            return res.status(400).json({ error: "Se requiere una imagen" });
        }

        const imagenBuffer = req.file.buffer; 

        // Validar cantidad
        if (!cantidad || cantidad <= 0) {
            return res.status(400).json({ error: "Se requiere una cantidad válida mayor a 0" });
        }

        connection = await db.getConnection();

        // Configurar el tiempo de espera de bloqueo
        await connection.execute('SET SESSION innodb_lock_wait_timeout = 50');
        
        try {
            await connection.beginTransaction();

            // 1. Primero crear el inventario
            const [inventoryResult] = await connection.execute(
                'INSERT INTO Inventario (cantidad, fechaIngreso, fechaSalida, fechaRealización) VALUES (?, NOW(), NOW(), NOW())',
                [cantidad]
            ) as [ResultSetHeader, any];
            const id_inventario = inventoryResult.insertId;

            // 2. Crear objeto de producto con el id_inventario generado
            const productData = new Product(
                nombreP, 
                tipo, 
                Precio, 
                cantidad,
                imagenBuffer, 
                id_inventario, 
                id_proveedor
            );
        
            // 3. Registrar el producto directamente en la base de datos
            const [result] = await connection.execute(
                'INSERT INTO Producto (nombreP, tipo, Precio, cantidad, imagen, id_inventario, id_proveedor) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [nombreP, tipo, Precio, cantidad, imagenBuffer, id_inventario, id_proveedor]
            ) as [ResultSetHeader, any];
            const productId = result.insertId;

            await connection.commit();

        return res.status(201).json({ 
            status: "Producto Registrado",
            message: "Producto registrado y asociado con inventario correctamente",
            data: {
                producto: nombreP,
                    productId: productId,
                id_inventario: id_inventario,
                    id_proveedor: id_proveedor,
                    cantidad: cantidad
            }
        });
        } catch (error) {
            if (connection) {
                await connection.rollback();
            }
            throw error;
        }
    } catch (error: any) {
        if (error?.code === "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        }
        return res.status(500).json({ 
            error: "Error interno del servidor",
            message: error.message 
        });
    } finally {
        if (connection) {
            await connection.release();
        }
    }
};

export default register;