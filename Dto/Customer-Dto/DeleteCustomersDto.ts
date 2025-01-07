class DeleteCustomer {

    private _apellido1:string;
    private _email:number;

    constructor(
        apellido1:string,
        email:number
    )
    {
        this._apellido1 = apellido1;
        this._email= email;
    }

    get apellido1():string{
        return this._apellido1;
    }

    get email():number{
        return this._email;
    }


    set apellido1(apellido1:string) {
        this._apellido1 = apellido1;
    }

    set email(email:number) {
        this._email = email;
    }


}

export default DeleteCustomer; 