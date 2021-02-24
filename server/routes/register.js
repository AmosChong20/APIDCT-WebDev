import express from 'express';

import { addRegisterData, getRegisterData ,findTZ} from '../controllers/register-controller.js';

const router = express.Router();


router.post('/', addRegisterData);

router.get('/', getRegisterData);

router.get('/:query', findTZ);

export default router;