import express from 'express';

import { addRegisterData, getRegisterData } from '../controllers/register-controller.js';

const router = express.Router();


router.post('/', addRegisterData);

router.get('/', getRegisterData);

export default router;