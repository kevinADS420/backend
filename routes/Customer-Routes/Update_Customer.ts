import express from "express";
import updateCustomerController from '../../controllers/Customer-controller/update-customer-controller';
import updateValidatorCustomer from '../../middleware/Customert-Validator/updateValidatorCustomer'



const router = express.Router();


router.put('/',updateValidatorCustomer.validatorParams, updateValidatorCustomer.validator, updateCustomerController);


export default router;