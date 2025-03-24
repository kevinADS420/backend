"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomerServices_1 = __importDefault(require("../services/CustomerServices"));
const DeleteCustomersDto_1 = __importDefault(require("../Dto/DeleteCustomersDto"));
const delete_customer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { apellido1, email } = req.body;
        const deleteCustomer = yield CustomerServices_1.default.deleteCustomer(new DeleteCustomersDto_1.default(apellido1, email));
        return res.status(200).json({ message: 'Cliente eliminado con éxito' });
    }
    catch (error) {
        if (error && error.code === "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        }
        else {
            return res.status(500).json({ error: "Error, no se pudo eliminar el cliente", details: error.message });
        }
    }
});
exports.default = delete_customer;
