class DeleteProduct {

    private _nombre: string;

    constructor(
        nombre: string

    )
    {
        this._nombre = nombre
    }

    //Geters

    get nombre():string{
        return this._nombre;
    }

    //seters

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

}

export default DeleteProduct;