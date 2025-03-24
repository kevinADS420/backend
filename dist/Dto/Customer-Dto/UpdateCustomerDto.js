"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateCustomer {
    constructor(Nombres, Apellidos, Email, numeroTelefono, tipo, contraseña, id_cliente) {
        this._Nombres = Nombres;
        this._Apellidos = Apellidos;
        this._Email = Email;
        this._numeroTelefono = numeroTelefono;
        this._tipo = tipo;
        this._contraseña = contraseña;
        this._id_cliente = id_cliente || 0;
    }
    get id_cliente() {
        return this._id_cliente;
    }
    set id_cliente(id) {
        this._id_cliente = id;
    }
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
    get numeroTelefono() {
        return this._numeroTelefono;
    }
    get tipo() {
        return this._tipo;
    }
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
    set numeroTelefono(numeroTelefono) {
        this._numeroTelefono = numeroTelefono;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
}
exports.default = UpdateCustomer;
