import { Request, Response } from "express";
import Inventory from "../../Dto/Product-Dto/InventoryDto";
import InventoryService from "../../services/InventoryServices";

const createInventory = async (req: Request, res: Response) => {
    try {
        const {
            cantidad,
            fechaIngreso,
            fechaSalida,
            fechaRealización
        } = req.body;

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

        // Crear objeto de inventario (sin id_producto por ahora)
        const inventoryData = new Inventory(
            cantidadInventario,
            parsedFechaIngreso,
            parsedFechaSalida,
            parsedFechaRealización
        );

        // Registrar inventario
        const result = await InventoryService.createInventory(inventoryData);

        return res.status(201).json({
            status: "Inventario Registrado",
            message: "Registro de inventario creado correctamente",
            data: {
                id_inventario: result.id_inventario,
                cantidad: cantidadInventario,
                fechaIngreso: parsedFechaIngreso,
                fechaSalida: parsedFechaSalida,
                fechaRealización: parsedFechaRealización
            }
        });
    } catch (error: any) {
        console.error("Error al registrar inventario:", error);
        res.status(500).json({ error: error.message || "Error interno del servidor" });
    }
};

export default createInventory;