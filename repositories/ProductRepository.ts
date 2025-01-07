import db from '../config/config-db';
import Product from '../Dto/Product-Dto/RegisterProductDto';
import GetProduct from '../Dto/Product-Dto/getProductDto';
import DeleteProduct from '../Dto/Product-Dto/DeleteProductDts';

class ProductRepository {


    static async getProduct(getproduct: GetProduct) {
        const sql = 'SELECT nombre, precio, caracteristicas FROM Producto WHERE nombre = ?';
        const values = [getproduct.nombre];
        const [rows] = await db.execute(sql, values);
        return rows;
    }

    static async registerProduct (product: Product){
        const sql = 'INSERT INTO Producto ( nombre, precio, caracteristicas ) VALUES (?, ?, ?)';
        const values = [ product.nombre, product.precio, product.caracteristicas ];
        return db.execute(sql, values);
    }


    static async deleteProduct(deleteProduct: DeleteProduct){
        const sql = 'DELETE FROM Producto WHERE nombre = ?';
        const values = [deleteProduct.nombre ];
        return db.execute(sql,values);
    }

    static async UpdateProduct(product: Product){
        const sql = 'UPDATE Producto SET nombre = ?, precio = ?, caracteristicas = ? WHERE id = ?'
        const values = [product.nombre, product.precio, product.caracteristicas, product.id];
        return db.execute(sql, values);
    }

}


export default ProductRepository;