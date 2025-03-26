class Inventory {
    private _id_producto?: number;
    private _cantidad: number;
    private _fechaIngreso: Date;
    private _fechaSalida: Date;
    private _fechaRealización: Date;

    constructor(
        cantidad: number,
        fechaIngreso: Date,
        fechaSalida: Date,
        fechaRealización: Date,
        id_producto?: number
    ) {
        this._cantidad = cantidad;
        this._fechaIngreso = fechaIngreso;
        this._fechaSalida = fechaSalida;
        this._fechaRealización = fechaRealización;
        this._id_producto = id_producto;
    }

    // Getters
    get id_producto(): number | undefined {
        return this._id_producto;
    }

    get cantidad(): number {
        return this._cantidad;
    }

    get fechaIngreso(): Date {
        return this._fechaIngreso;
    }

    get fechaSalida(): Date {
        return this._fechaSalida;
    }

    get fechaRealización(): Date {
        return this._fechaRealización;
    }

    // Setters
    set id_producto(id_producto: number | undefined) {
        this._id_producto = id_producto;
    }

    set cantidad(cantidad: number) {
        this._cantidad = cantidad;
    }

    set fechaIngreso(fechaIngreso: Date) {
        this._fechaIngreso = fechaIngreso;
    }

    set fechaSalida(fechaSalida: Date) {
        this._fechaSalida = fechaSalida;
    }

    set fechaRealización(fechaRealización: Date) {
        this._fechaRealización = fechaRealización;
    }
}

export default Inventory;