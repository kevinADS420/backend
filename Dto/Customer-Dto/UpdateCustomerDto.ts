class UpdateCustomer {
    private _id_cliente: number;
    private _Nombres: string;
    private _Apellidos: string;
    private _Email: string;
    private _contraseña?: string;
    private _numeroTelefono?: string;
    private _tipo?: string;

    constructor(
        Nombres: string,
        Apellidos: string,
        Email: string,
        numeroTelefono?: string,
        tipo?: string,
        contraseña?: string,
        id_cliente?: number
    ) {
        this._Nombres = Nombres;
        this._Apellidos = Apellidos;
        this._Email = Email;
        this._numeroTelefono = numeroTelefono;
        this._tipo = tipo;
        this._contraseña = contraseña;
        this._id_cliente = id_cliente || 0;
    }

    get id_cliente(): number {
        return this._id_cliente;
    }

    set id_cliente(id: number) {
        this._id_cliente = id;
    }

    get Nombres(): string {
        return this._Nombres;
    }

    get Apellidos(): string {
        return this._Apellidos;
    }

    get Email(): string {
        return this._Email;
    }

    get contraseña(): string | undefined {
        return this._contraseña;
    }

    get numeroTelefono(): string | undefined {
        return this._numeroTelefono;
    }

    get tipo(): string | undefined {
        return this._tipo;
    }

    set Nombres(Nombres: string) {
        this._Nombres = Nombres;
    }

    set Apellidos(Apellidos: string) {
        this._Apellidos = Apellidos;
    }

    set Email(Email: string) {
        this._Email = Email;
    }

    set contraseña(contraseña: string | undefined) {
        this._contraseña = contraseña;
    }

    set numeroTelefono(numeroTelefono: string | undefined) {
        this._numeroTelefono = numeroTelefono;
    }

    set tipo(tipo: string | undefined) {
        this._tipo = tipo;
    }
}

export default UpdateCustomer; 