"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Admin {
    constructor(Nombre, Apellido, Email, contraseña) {
        this._Nombre = Nombre;
        this._Apellido = Apellido;
        this._Email = Email;
        this._contraseña = contraseña;
    }
    // Geters 
    get Nombre() {
        return this._Nombre;
    }
    get Apellido() {
        return this._Apellido;
    }
    get Email() {
        return this._Email;
    }
    get contraseña() {
        return this._contraseña;
    }
    //Setters
    set Nombre(Nombre) {
        this._Nombre = Nombre;
    }
    set Apellido(Apellido) {
        this._Apellido = Apellido;
    }
    set Email(Email) {
        this._Email = Email;
    }
    set contraseña(contraseña) {
        this._contraseña = contraseña;
    }
}
exports.default = Admin;
