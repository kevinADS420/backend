class proveedor {

    private _nombres: string;
    private _apellidos: string;
    private _Email: string;
    private _contraseña: string;


    constructor(
        nombres: string,
        apellidos:string,
        Email: string,
        contraseña: string
    ) {
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._Email = Email;
        this._contraseña = contraseña;

    }

    // Getters 

    get nombres(): string {
        return this._nombres;
    }

    get apellidos(): string {
        return this._apellidos;
    }

    get Email(): string {
        return this._Email;
    }

    get contraseña(): string {
        return this._contraseña;
    }

    // Setters 

    set nombres(nombres: string) {
        this._nombres = nombres;
    }

    set apellidos(apellidos: string) {
        this._apellidos = apellidos;
    }

    set Email(Email: string) {
        this._Email = Email;
    }

    set contraseña(contraseña: string) {
        this._contraseña = contraseña;
    }
}

export default proveedor;