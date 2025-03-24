"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeleteProduct {
    constructor(nombre) {
        this._nombre = nombre;
    }
    //Geters
    get nombre() {
        return this._nombre;
    }
    //seters
    set nombre(nombre) {
        this._nombre = nombre;
    }
}
exports.default = DeleteProduct;
