"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeleteCustomer {
    constructor(apellido, email) {
        this._apellido = apellido;
        this._email = email;
    }
    get apellido() {
        return this._apellido;
    }
    get email() {
        return this._email;
    }
    set apellido1(apellido) {
        this._apellido = apellido;
    }
    set email(email) {
        this._email = email;
    }
}
exports.default = DeleteCustomer;
