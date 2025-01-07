class Admin {

    private _nombre: string;
    private _apellido: string;
    private _email: string;
    private _contraseña: string;


    constructor (

        nombre: string,
        apellido: string,
        email: string,
        contraseña: string

    ) {

        this._nombre = nombre;
        this._apellido = apellido;
        this._email = email;
        this._contraseña = contraseña

    }

    // Geters 


    get nombre(): string {
        return this._nombre;
    }

    get apellido(): string {
        return this._apellido;
    }

    get email(): string {
        return this._email;
    }

    get contraseña(): string {
        return this._contraseña;
    }

    //Setters

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    set apellido(apellido: string) {
        this._apellido = apellido;
    }

    set email(email: string) {
        this._email = email;
    }

    set contraseña(contraseña: string) {
        this._contraseña = contraseña;
    }

}

export default Admin;