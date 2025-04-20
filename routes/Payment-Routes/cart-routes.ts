import { Router } from 'express';
import { addToCart } from '../../controllers/Payment-controller/add-to-cart-controller';
import { removeFromCart } from '../../controllers/Payment-controller/remove-from-cart-controller';
import { getCart } from '../../controllers/Payment-controller/get-cart-controller';
import verifyToken from '../../middleware/VerifyToken';
import verifyRoles from '../../middleware/VerifyCustomerRole';

const router = Router();

// Middleware para verificar token y rol de cliente
const verifyCustomer = [verifyToken, verifyRoles(['customer'])];

// Rutas del carrito
router.post('/:id_cliente/add', verifyCustomer, addToCart);
router.delete('/:id_cliente/remove', verifyCustomer, removeFromCart);
router.get('/:id_cliente', verifyCustomer, getCart);

export default router; 