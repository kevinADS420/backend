class PasswordReset {
    private _Email: string;
    private _codigo?: string;
    private _nuevaContraseña?: string;

    constructor(
        Email: string,
        codigo?: string,
        nuevaContraseña?: string
    ) {
        this._Email = Email;
        this._codigo = codigo;
        this._nuevaContraseña = nuevaContraseña;
    }

    get Email(): string {
        return this._Email;
    }

    get codigo(): string | undefined {
        return this._codigo;
    }

    get nuevaContraseña(): string | undefined {
        return this._nuevaContraseña;
    }

    set Email(Email: string) {
        this._Email = Email;
    }

    set codigo(codigo: string | undefined) {
        this._codigo = codigo;
    }

    set nuevaContraseña(nuevaContraseña: string | undefined) {
        this._nuevaContraseña = nuevaContraseña;
    }
}

export default PasswordReset; 