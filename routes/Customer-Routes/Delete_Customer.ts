import express from "express";
import deleteCustomerController from "../../controllers/Customer-controller/delete-customer-controller";
import deleteValidatorCustomer from "../../middleware/Customer-Validator/DeleteValidatorCustomer";
import verifyToken from "../../middleware/VerifyToken";
import verifyCustomerRole from "../../middleware/VerifyCustomerRole";

const router = express.Router();

router.delete('/', 
    verifyToken, 
    verifyCustomerRole, 
    deleteValidatorCustomer.validatorParams, 
    deleteValidatorCustomer.validator, 
    deleteCustomerController
);

export default router;