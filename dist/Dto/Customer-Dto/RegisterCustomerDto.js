"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor(Nombres, Apellidos, Email, contraseña) {
        this._Nombres = Nombres;
        this._Apellidos = Apellidos;
        this._Email = Email;
        this._contraseña = contraseña;
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
}
exports.default = Customer;
