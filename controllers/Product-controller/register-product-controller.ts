import { Request, Response } from "express"; 
import Product from "../../Dto/Product-Dto/RegisterProductDto";
import Inventory from "../../Dto/Product-Dto/InventoryDto";
import ProductService from "../../services/ProductServices";

let register = async (req: Request, res: Response) => {
    try {
        const {
            nombreP,
            tipo,
            Precio,
            cantidad, // Nuevo campo para la cantidad del inventario
            fechaIngreso, // Fecha de ingreso 
            fechaSalida, // Fecha de salida
            fechaRealización // Fecha de realización
        } = req.body;

        if (!req.file) {
            return res.status(400).json({ error: "Se requiere una imagen" });
        }

        const imagen = req.file.buffer; // Imagen en formato binario

        // Convertir las fechas si están en formato string
        const parsedFechaIngreso = fechaIngreso ? new Date(fechaIngreso) : new Date();
        const parsedFechaSalida = fechaSalida ? new Date(fechaSalida) : new Date();
        const parsedFechaRealización = fechaRealización ? new Date(fechaRealización) : new Date();

        // Validar que las fechas sean válidas
        if (isNaN(parsedFechaIngreso.getTime()) || isNaN(parsedFechaSalida.getTime()) || isNaN(parsedFechaRealización.getTime())) {
            return res.status(400).json({ error: "Formato de fecha inválido" });
        }

        // Validar cantidad
        const cantidadInventario = cantidad ? parseInt(cantidad) : 0;
        if (isNaN(cantidadInventario) || cantidadInventario < 0) {
            return res.status(400).json({ error: "La cantidad debe ser un número positivo" });
        }

        // Crear objeto de inventario
        const inventoryData = new Inventory(
            cantidadInventario,
            parsedFechaIngreso,
            parsedFechaSalida,
            parsedFechaRealización
        );

        // Registrar producto e inventario en una transacción
        const RegisterProduct = await ProductService.registerWithInventory(
            new Product(nombreP, tipo, Precio, imagen),
            inventoryData
        );

        return res.status(201).json({ 
            status: "Producto Registrado",
            message: "Producto e inventario registrados correctamente",
            data: {
                producto: nombreP,
                inventario: {
                    cantidad: cantidadInventario,
                    fechaIngreso: parsedFechaIngreso,
                    fechaSalida: parsedFechaSalida,
                    fechaRealización: parsedFechaRealización
                }
            }
        });
    } catch (error: any) {
        if (error?.code === "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        }
        console.error(error); // Agrega esto para ver el error en la terminal
        res.status(500).json({ error: error.message || "Error interno del servidor" });
    }
};

export default register;