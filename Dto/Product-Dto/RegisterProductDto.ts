class Product {
    private _id: number;
    private _nombre: string;
    private _precio: number;
    private _caracteristicas: string;


    constructor(

        id: number,
        nombre: string,
        precio: number,
        caracteristicas: string
    ) {
        this._id= id;
        this._nombre = nombre;
        this._precio = precio;
        this._caracteristicas = caracteristicas
    }

    // Geters

    get id(): number {
        return this._id;
    }

    get nombre(): string {
        return this._nombre;
    }

    get precio(): number {
        return this._precio;
    }

    get caracteristicas(): string {
        return this._caracteristicas;
    }

    // Seters

    set id(id:number) {
        this._id = id
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    set precio(precio:number) {
        this._precio = precio;
    }

    set caracteristicas(caracteristicas: string) {
        this._caracteristicas = caracteristicas;
    }

}

export default Product;