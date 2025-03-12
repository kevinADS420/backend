class Auth {
    private _Email: string;
    private _contraseña: string
    constructor(
        email: string,
        contraseña: string
    ) {
        this._Email = email;
        this._contraseña = contraseña;
    }
    // Getters
    get Email(): string {
        return this._Email;
    }


    get contraseña(): string {
        return this._contraseña;
    }



    // Setters

        
    set Email(email: string) {
        this._Email = email;
    }
    
    set contraseña(contraseña: string) {
        this._contraseña = contraseña;
    }

}

export default Auth;