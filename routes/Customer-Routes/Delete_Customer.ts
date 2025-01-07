import express from "express";
import deleteCustomerController from '../../controllers/Customer-controller/delete-customer-controller'
import deleteValidatorCustomer from '../../middleware/Customert-Validator/RegisterValidatorCustomer';

const router = express.Router();


router.delete('/', deleteValidatorCustomer.validatorParams, deleteValidatorCustomer.validator, deleteCustomerController);

export default router;