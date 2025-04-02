"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Inventory {
    constructor(cantidad, fechaIngreso, fechaSalida, fechaRealización, id_producto, inSeason = true) {
        this._cantidad = cantidad;
        this._fechaIngreso = fechaIngreso;
        this._fechaSalida = fechaSalida;
        this._fechaRealización = fechaRealización;
        this._id_producto = id_producto;
        this._inSeason = inSeason;
    }
    // Getters
    get id_producto() {
        return this._id_producto;
    }
    get cantidad() {
        return this._cantidad;
    }
    get fechaIngreso() {
        return this._fechaIngreso;
    }
    get fechaSalida() {
        return this._fechaSalida;
    }
    get fechaRealización() {
        return this._fechaRealización;
    }
    get inSeason() {
        return this._inSeason;
    }
    // Setters
    set id_producto(id_producto) {
        this._id_producto = id_producto;
    }
    set cantidad(cantidad) {
        this._cantidad = cantidad;
    }
    set fechaIngreso(fechaIngreso) {
        this._fechaIngreso = fechaIngreso;
    }
    set fechaSalida(fechaSalida) {
        this._fechaSalida = fechaSalida;
    }
    set fechaRealización(fechaRealización) {
        this._fechaRealización = fechaRealización;
    }
    set inSeason(inSeason) {
        this._inSeason = inSeason;
    }
}
exports.default = Inventory;
