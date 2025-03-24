"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.memoryStorage(); // Guarda la imagen en memoria como buffer
const upload = (0, multer_1.default)({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // Límite de 10MB
    fileFilter: (req, file, cb) => {
        const tiposPermitidos = ["image/jpeg", "image/png", "image/gif"];
        if (tiposPermitidos.includes(file.mimetype)) {
            cb(null, true);
        }
        else {
            cb(new Error("Formato de imagen no válido. Solo se permiten JPG, PNG y GIF"));
        }
    },
});
exports.default = upload;
