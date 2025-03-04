class Product {
    private _nombreP: string;
    private _tipo: string;
    private _Precio: number;
    private _imagen: Buffer;


    constructor(

        nombreP: string,
        tipo: string,
        Precio: number,
        imagen: Buffer
    ) {
        this._nombreP = nombreP;
        this._tipo = tipo;
        this._Precio = Precio;
        this._imagen = imagen
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

}

export default Product;