import express from 'express';

import { addRegisterTestData, getRegisterTestData ,findTZTest} from '../controllers/registerTest-controller.js';

const router = express.Router();


router.post('/', addRegisterTestData);

router.get('/', getRegisterTestData);

router.get('/:query', findTZTest);

export default router;