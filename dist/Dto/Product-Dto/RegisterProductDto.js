"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(nombreP, tipo, Precio, imagen) {
        this._nombreP = nombreP;
        this._tipo = tipo;
        this._Precio = Precio;
        this._imagen = imagen;
    }
    // Geters
    get nombreP() {
        return this._nombreP;
    }
    get tipo() {
        return this._tipo;
    }
    get Precio() {
        return this._Precio;
    }
    get imagen() {
        return this._imagen;
    }
    // Seters
    set nombreP(nombreP) {
        this._nombreP = nombreP;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    set Precio(Precio) {
        this._Precio = Precio;
    }
    set imagen(imagen) {
        this._imagen = imagen;
    }
}
exports.default = Product;
