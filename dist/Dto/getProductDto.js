"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetProduct {
    constructor(nombre) {
        this._nombre = nombre;
    }
    //Geters
    get nombre() {
        return this._nombre;
    }
    //Seters
    set nombre(nombre) {
        this._nombre = nombre;
    }
}
exports.default = GetProduct;
