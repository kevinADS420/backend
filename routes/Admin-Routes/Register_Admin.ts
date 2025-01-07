import express from "express";
import regisAdminController from "../../controllers/Admin-controller/register-Admin-controller";
import RegisterValidatorAdmin from '../../middleware/Admin-Validator/RegisterValidatorAdmin'

const router = express.Router();

router.post('/', RegisterValidatorAdmin.validatorParams, RegisterValidatorAdmin.validator, regisAdminController)

export default router;