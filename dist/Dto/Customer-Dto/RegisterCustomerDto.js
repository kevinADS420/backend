"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor(Nombres, Apellidos, Email, contraseña, googleId, role) {
        this._Nombres = Nombres;
        this._Apellidos = Apellidos;
        this._Email = Email;
        this._contraseña = contraseña;
        this._googleId = googleId;
        this._role = role || 'cliente';
    }
    // Getters
    get Nombres() {
        return this._Nombres;
    }
    get Apellidos() {
        return this._Apellidos;
    }
    get Email() {
        return this._Email;
    }
    get contraseña() {
        return this._contraseña;
    }
    get googleId() {
        return this._googleId;
    }
    get role() {
        return this._role;
    }
    // Setters
    set Nombres(Nombres) {
        this._Nombres = Nombres;
    }
    set Apellidos(Apellidos) {
        this._Apellidos = Apellidos;
    }
    set Email(Email) {
        this._Email = Email;
    }
    set contraseña(contraseña) {
        this._contraseña = contraseña;
    }
    set googleId(googleId) {
        this._googleId = googleId;
    }
    set role(role) {
        this._role = role;
    }
}
exports.default = Customer;
