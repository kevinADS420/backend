import express from "express";
import deleteProveedorController from "../../controllers/Proveedor-controller/delete-proveedor-controller";
import deleteValidatorProveedor from "../../middleware/Proveedor-Validator/DeleteValidatorProveedor";
import verifyToken from "../../middleware/VerifyToken";
import verifyProveedorRole from "../../middleware/VerifyProveedorRole";

const router = express.Router();

router.delete('/', 
    // verifyToken, 
    // verifyProveedorRole, 
    // deleteValidatorProveedor.validatorParams, 
    // deleteValidatorProveedor.validator, 
    deleteProveedorController
);

export default router; 