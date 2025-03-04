class Customer {
    
    private _Nombres: string;
    private _Apellidos: string;
    private _Email: string;
    private _contraseña: string

    constructor(
        Nombres: string,
        Apellidos: string, 
        Email: string,
        contraseña: string
    ) {
        this._Nombres = Nombres;
        this._Apellidos = Apellidos;
        this._Email = Email;
        this._contraseña = contraseña;
    }

    // Getters
    
    get Nombres(): string {
        return this._Nombres;
    }

    get Apellidos(): string {
        return this._Apellidos;
    }
    
    get Email(): string {
        return this._Email;
    }

    get contraseña(): string {
        return this._contraseña;
    }

    // Setters
    
    set Nombres(Nombres: string) {
        this._Nombres = Nombres;
    }

    set Apellidos(Apellidos: string) {
        this._Apellidos = Apellidos;
    }
    
    set Email(Email: string) {
        this._Email = Email;
    }

    set contraseña(contraseña: string) {
        this._contraseña = contraseña;
    }
}

export default Customer;