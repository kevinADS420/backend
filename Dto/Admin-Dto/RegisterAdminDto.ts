class Admin {

    private _Nombre: string;
    private _Apellido: string;
    private _Email: string;
    private _contraseña: string;


    constructor (

        Nombre: string,
        Apellido: string,
        Email: string,
        contraseña: string

    ) {

        this._Nombre = Nombre;
        this._Apellido = Apellido;
        this._Email = Email;
        this._contraseña = contraseña

    }

    // Geters 


    get Nombre(): string {
        return this._Nombre;
    }

    get Apellido(): string {
        return this._Apellido;
    }

    get Email(): string {
        return this._Email;
    }

    get contraseña(): string {
        return this._contraseña;
    }

    //Setters

    set Nombre(Nombre: string) {
        this._Nombre = Nombre;
    }

    set Apellido(Apellido: string) {
        this._Apellido = Apellido;
    }

    set Email(Email: string) {
        this._Email = Email;
    }

    set contraseña(contraseña: string) {
        this._contraseña = contraseña;
    }

}

export default Admin;