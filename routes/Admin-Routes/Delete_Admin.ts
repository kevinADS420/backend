import express from "express";
import deleteAdminController from '../../controllers/Admin-controller/delete-admin-controller'
import deleteValidatorAdmin from '../../middleware/Admin-Validator/DeleteValidatorAdmin'

const router = express.Router();

router.delete('/', deleteValidatorAdmin.validatorParams,deleteValidatorAdmin.validator,deleteAdminController)

export default router;