class GetProduct {
    private _nombre:string;

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

    //Seters

    set nombre (nombre:string){
        this._nombre = nombre;
    }

}


export default GetProduct;