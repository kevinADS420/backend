"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Auth {
    constructor(email, contraseña) {
        this._Email = email;
        this._contraseña = contraseña;
    }
    // Getters
    get Email() {
        return this._Email;
    }
    get contraseña() {
        return this._contraseña;
    }
    // Setters
    set Email(email) {
        this._Email = email;
    }
    set contraseña(contraseña) {
        this._contraseña = contraseña;
    }
}
exports.default = Auth;
