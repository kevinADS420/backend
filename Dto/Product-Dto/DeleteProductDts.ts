class DeleteProduct {
    private _id_producto: number;

    constructor(
        id_producto: number
    ) {
        this._id_producto = id_producto;
    }

    //Geters
    get id_producto(): number {
        return this._id_producto;
    }

    //seters
    set id_producto(id_producto: number) {
        this._id_producto = id_producto;
    }
}

export default DeleteProduct;