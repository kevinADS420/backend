import {Request, Response} from "express"
import Product from "../../Dto/Product-Dto/RegisterProductDto";
import ProductService from "../../services/ProductService";

const productService = new ProductService();

const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { nombreP, tipo, Precio, cantidad, imagen } = req.body;

        const updateProduct = new Product(
            nombreP,
            tipo,
            Precio,
            cantidad,
            imagen,
            undefined,
            undefined,
            parseInt(id)
        );

        const result = await productService.updateProduct(updateProduct);

        return res.status(200).json({
            status: 'Producto actualizado exitosamente',
            data: result
        });
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        return res.status(500).json({
            status: 'Error al actualizar el producto',
            error: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
};

export default updateProduct;