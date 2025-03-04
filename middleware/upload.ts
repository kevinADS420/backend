import multer from "multer";

const storage = multer.memoryStorage();  // Guarda la imagen en memoria como buffer
const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // Límite de 10MB
    fileFilter: (req, file, cb) => {
        const tiposPermitidos = ["image/jpeg", "image/png", "image/gif"];
        if (tiposPermitidos.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Formato de imagen no válido. Solo se permiten JPG, PNG y GIF"));
        }
    },
});

export default upload;