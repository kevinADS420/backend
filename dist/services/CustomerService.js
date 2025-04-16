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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const client_1 = require("@prisma/client");
class CustomerService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.customer.findUnique({
                where: { email },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    address: true,
                    phone: true
                }
            });
        });
    }
    getProfile(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.customer.findUnique({
                where: { id },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    address: true,
                    phone: true
                }
            });
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.customer.create({
                data: {
                    email: data.email,
                    name: data.name,
                    // Add default values for required fields
                    address: '',
                    phone: '',
                    password: '' // Consider generating a random password or handling this differently
                },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    address: true,
                    phone: true
                }
            });
        });
    }
    updateProfile(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.customer.update({
                where: { id },
                data,
                select: {
                    id: true,
                    email: true,
                    name: true,
                    address: true,
                    phone: true
                }
            });
        });
    }
}
exports.CustomerService = CustomerService;
