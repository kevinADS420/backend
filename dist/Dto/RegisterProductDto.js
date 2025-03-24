"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(id, nombre, precio, caracteristicas) {
        this._id = id;
        this._nombre = nombre;
        this._precio = precio;
        this._caracteristicas = caracteristicas;
    }
    // Geters
    get id() {
        return this._id;
    }
    get nombre() {
        return this._nombre;
    }
    get precio() {
        return this._precio;
    }
    get caracteristicas() {
        return this._caracteristicas;
    }
    // Seters
    set id(id) {
        this._id = id;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set precio(precio) {
        this._precio = precio;
    }
    set caracteristicas(caracteristicas) {
        this._caracteristicas = caracteristicas;
    }
}
exports.default = Product;
