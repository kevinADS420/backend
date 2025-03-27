class Product {
    private _nombreP: string;
    private _tipo: string;
    private _Precio: number;
    private _imagen: Buffer;
    private _id_inventario?: number;
    private _id_proveedor?: number;

    constructor(

        nombreP: string,
        tipo: string,
        Precio: number,
        imagen: Buffer,
        id_inventario?: number,
        id_proveedor?: number

    ) {
        this._nombreP = nombreP;
        this._tipo = tipo;
        this._Precio = Precio;
        this._imagen = imagen;
        this._id_inventario = id_inventario;
        this._id_proveedor = id_proveedor;
    }

    // Geters

    get nombreP(): string {
        return this._nombreP;
    }

    get tipo(): string {
        return this._tipo;
    }

    get Precio(): number {
        return this._Precio;
    }

    get imagen(): Buffer {
        return this._imagen;
    }

    get id_inventario(): number | undefined {
        return this._id_inventario
    }    
    
    get id_proveedor(): number | undefined {
        return this._id_proveedor;
    }


    // Seters

    set nombreP(nombreP: string) {
        this._nombreP = nombreP;
    }

    set tipo(tipo: string) {
        this._tipo = tipo;
    }

    set Precio(Precio:number) {
        this._Precio = Precio;
    }

    set imagen(imagen: Buffer) {
        this._imagen = imagen;
    }

    set id_inventario(id_inventario: number | undefined) {
        this._id_inventario = id_inventario;
    }

    set id_proveedor(id_proveedor: number | undefined) {
        this._id_proveedor = id_proveedor;
    }

}

export default Product;