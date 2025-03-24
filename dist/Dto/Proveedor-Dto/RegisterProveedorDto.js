"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class proveedor {
    constructor(nombres, apellidos, Email, contraseña) {
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._Email = Email;
        this._contraseña = contraseña;
    }
    // Getters 
    get nombres() {
        return this._nombres;
    }
    get apellidos() {
        return this._apellidos;
    }
    get Email() {
        return this._Email;
    }
    get contraseña() {
        return this._contraseña;
    }
    // Setters 
    set nombres(nombres) {
        this._nombres = nombres;
    }
    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }
    set Email(Email) {
        this._Email = Email;
    }
    set contraseña(contraseña) {
        this._contraseña = contraseña;
    }
}
exports.default = proveedor;
