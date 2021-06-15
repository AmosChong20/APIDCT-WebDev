import express from 'express';

import { addTimeData, getTimeData ,findTime} from '../controllers/time-controller.js';

const router = express.Router();


router.post('/', addTimeData);

router.get('/', getTimeData);

router.get('/:query', findTime);

export default router;