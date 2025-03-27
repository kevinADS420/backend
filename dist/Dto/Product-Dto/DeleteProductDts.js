"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeleteProduct {
    constructor(id_producto) {
        this._id_producto = id_producto;
    }
    //Geters
    get id_producto() {
        return this._id_producto;
    }
    //seters
    set id_producto(id_producto) {
        this._id_producto = id_producto;
    }
}
exports.default = DeleteProduct;
