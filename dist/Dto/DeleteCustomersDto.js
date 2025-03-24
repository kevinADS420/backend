"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeleteCustomer {
    constructor(apellido1, email) {
        this._apellido1 = apellido1;
        this._email = email;
    }
    get apellido1() {
        return this._apellido1;
    }
    get email() {
        return this._email;
    }
    set apellido1(apellido1) {
        this._apellido1 = apellido1;
    }
    set email(email) {
        this._email = email;
    }
}
exports.default = DeleteCustomer;
