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
const CustomerRepository_1 = __importDefault(require("../repositories/CustomerRepository"));
class CustomerService {
    static login(auth) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield CustomerRepository_1.default.login(auth);
        });
    }
    static register(Customer) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield CustomerRepository_1.default.add(Customer);
        });
    }
    static UpdateCustomer(customer) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Servicio recibió:', customer);
            try {
                const result = yield CustomerRepository_1.default.UpdateCustomer(customer);
                console.log('Resultado de la actualización:', result);
                return result;
            }
            catch (error) {
                console.error('Error en el servicio:', error);
                throw error;
            }
        });
    }
    static deleteCustomer(deleteCustomer) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield CustomerRepository_1.default.deleteCustomer(deleteCustomer);
        });
    }
}
exports.default = CustomerService;
