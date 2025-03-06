import express from "express";
import unifiedAuthController from '../controllers/unified-auth-controller';

const router = express.Router();

router.post('/', unifiedAuthController);

export default router;