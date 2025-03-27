"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeleteProduct {
    constructor(nombreP) {
        this._nombreP = nombreP;
    }
    //Geters
    get nombreP() {
        return this._nombreP;
    }
    //seters
    set nombreP(nombreP) {
        this._nombreP = nombreP;
    }
}
exports.default = DeleteProduct;
