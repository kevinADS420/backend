"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Admin {
    constructor(nombre, apellido, email, contraseña) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._email = email;
        this._contraseña = contraseña;
    }
    // Geters 
    get nombre() {
        return this._nombre;
    }
    get apellido() {
        return this._apellido;
    }
    get email() {
        return this._email;
    }
    get contraseña() {
        return this._contraseña;
    }
    //Setters
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    set email(email) {
        this._email = email;
    }
    set contraseña(contraseña) {
        this._contraseña = contraseña;
    }
}
exports.default = Admin;
