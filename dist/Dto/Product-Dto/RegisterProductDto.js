"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(nombreP, tipo, Precio, imagen, id_inventario, id_proveedor) {
        this._nombreP = nombreP;
        this._tipo = tipo;
        this._Precio = Precio;
        this._imagen = imagen;
        this._id_inventario = id_inventario;
        this._id_proveedor = id_proveedor;
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
    get id_inventario() {
        return this._id_inventario;
    }
    get id_proveedor() {
        return this._id_proveedor;
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
    set id_inventario(id_inventario) {
        this._id_inventario = id_inventario;
    }
    set id_proveedor(id_proveedor) {
        this._id_proveedor = id_proveedor;
    }
}
exports.default = Product;
