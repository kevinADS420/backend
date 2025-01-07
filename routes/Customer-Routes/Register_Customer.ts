import express from "express";
import registerCustomerController from '../../controllers/Customer-controller/register-customer-controller';
import registerValidator from '../../middleware/Customert-Validator/RegisterValidatorCustomer';

const router = express.Router();


router.post('/', registerValidator.validatorParams, registerValidator.validator, registerCustomerController);


export default router;