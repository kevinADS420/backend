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
let customerProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idUser = req.body.id;
        const role = req.body.role;
        return res.status(200).json({
            status: 'Get customer profile OK',
            id: idUser,
            role: role
        });
    }
    catch (error) {
        return res.status(500).json({
            errorInfo: "An unknown error has occurred"
        });
    }
});
exports.default = customerProfile;
