class DeleteCustomer {

    private _apellido:string;
    private _email:number;

    constructor(
        apellido:string,
        email:number
    )
    {
        this._apellido = apellido;
        this._email= email;
    }

    get apellido():string{
        return this._apellido;
    }

    get email():number{
        return this._email;
    }


    set apellido1(apellido:string) {
        this._apellido = apellido;
    }

    set email(email:number) {
        this._email = email;
    }


}

export default DeleteCustomer; 