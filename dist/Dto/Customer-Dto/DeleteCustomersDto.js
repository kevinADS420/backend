"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeleteCustomer {
    constructor(Apellidos, Email) {
        this._Apellidos = Apellidos;
        this._Email = Email;
    }
    get Apellidos() {
        return this._Apellidos;
    }
    get Email() {
        return this._Email;
    }
    set Apellidos(Apellidos) {
        this._Apellidos = Apellidos;
    }
    set Email(Email) {
        this._Email = Email;
    }
}
exports.default = DeleteCustomer;
