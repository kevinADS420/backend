class DeleteCustomer {

    private _Apellidos:string;
    private _Email:string;

    constructor(
        Apellidos:string,
        Email:string
    )
    {
        this._Apellidos = Apellidos;
        this._Email = Email;
    }

    get Apellidos():string{
        return this._Apellidos;
    }

    get Email():string{
        return this._Email;
    }


    set Apellidos(Apellidos:string) {
        this._Apellidos = Apellidos;
    }

    set Email(Email:string) {
        this._Email = Email;
    }


}

export default DeleteCustomer; 