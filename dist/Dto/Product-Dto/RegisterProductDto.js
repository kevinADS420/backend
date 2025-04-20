"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(nombreP, tipo, Precio, cantidad, imagen, id_inventario, id_proveedor, id_producto) {
        this._nombreP = nombreP;
        this._tipo = tipo;
        this._Precio = Precio;
        this._cantidad = cantidad;
        this._imagen = imagen;
        this._id_inventario = id_inventario;
        this._id_proveedor = id_proveedor;
        this._id_producto = id_producto;
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
    get cantidad() {
        return this._cantidad;
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
    get id_producto() {
        return this._id_producto;
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
    set cantidad(cantidad) {
        this._cantidad = cantidad;
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
    set id_producto(id_producto) {
        this._id_producto = id_producto;
    }
}
exports.default = Product;
