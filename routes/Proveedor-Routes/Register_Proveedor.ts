import express from "express"; 
import registerproveedorController from '../../controllers/Proveedor-controller.ts/register-Proveedor-controller'
import registerValidator from '../../middleware/Proveedor-Validator/RegisterValidatorProveedor';

const router = express.Router();


router.post('/', registerValidator.validatorParams, registerValidator.validator, registerproveedorController);


export default router;