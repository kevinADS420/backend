class DeleteCustomer {

    private _Apellidos:string;
    private _Email:number;

    constructor(
        Apellidos:string,
        Email:number
    )
    {
        this._Apellidos = Apellidos;
        this._Email= Email;
    }

    get Apellidos():string{
        return this._Apellidos;
    }

    get Email():number{
        return this._Email;
    }


    set Apellidos(Apellido:string) {
        this._Apellidos = Apellido;
    }

    set Email(Email:number) {
        this._Email = Email;
    }


}

export default DeleteCustomer; 