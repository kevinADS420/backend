"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PasswordReset {
    constructor(Email, codigo, nuevaContraseña) {
        this._Email = Email;
        this._codigo = codigo;
        this._nuevaContraseña = nuevaContraseña;
    }
    get Email() {
        return this._Email;
    }
    get codigo() {
        return this._codigo;
    }
    get nuevaContraseña() {
        return this._nuevaContraseña;
    }
    set Email(Email) {
        this._Email = Email;
    }
    set codigo(codigo) {
        this._codigo = codigo;
    }
    set nuevaContraseña(nuevaContraseña) {
        this._nuevaContraseña = nuevaContraseña;
    }
}
exports.default = PasswordReset;
