"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor(nombre, apellido1, apellido2, direccion, calle, carrera, email, contraseña) {
        this._nombre = nombre;
        this._apellido1 = apellido1;
        this._apellido2 = apellido2;
        this._direccion = direccion;
        this._calle = calle;
        this._carrera = carrera;
        this._email = email;
        this._contraseña = contraseña;
    }
    // Getters
    get nombre() {
        return this._nombre;
    }
    get apellido1() {
        return this._apellido1;
    }
    get apellido2() {
        return this._apellido2;
    }
    get direccion() {
        return this._direccion;
    }
    get calle() {
        return this._calle;
    }
    get carrera() {
        return this._carrera;
    }
    get email() {
        return this._email;
    }
    get contraseña() {
        return this._contraseña;
    }
    // Setters
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set apellido1(apellido1) {
        this._apellido1 = apellido1;
    }
    set apellido2(apellido2) {
        this._apellido2 = apellido2;
    }
    set direccion(direccion) {
        this._direccion = direccion;
    }
    set calle(calle) {
        this._calle = calle;
    }
    set carrera(carrera) {
        this._carrera = carrera;
    }
    set email(email) {
        this._email = email;
    }
    set contraseña(contraseña) {
        this._contraseña = contraseña;
    }
}
exports.default = Customer;
