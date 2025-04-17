class Customer {
    
    private _Nombres: string;
    private _Apellidos: string;
    private _Email: string;
    private _contraseña: string;
    private _googleId?: string;
    private _role?: string;

    constructor(
        Nombres: string,
        Apellidos: string, 
        Email: string,
        contraseña: string,
        googleId?: string,
        role?: string
    ) {
        this._Nombres = Nombres;
        this._Apellidos = Apellidos;
        this._Email = Email;
        this._contraseña = contraseña;
        this._googleId = googleId;
        this._role = role || 'cliente';
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

    get googleId(): string | undefined {
        return this._googleId;
    }

    get role(): string | undefined {
        return this._role;
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

    set googleId(googleId: string | undefined) {
        this._googleId = googleId;
    }

    set role(role: string | undefined) {
        this._role = role;
    }
}

export default Customer;