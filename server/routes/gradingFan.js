import express from 'express';

import { addGradingFanData, getGradingFanData ,findGradingFan ,findGradingFanToken} from '../controllers/gradingFan-controller.js';

const router = express.Router();


router.post('/', addGradingFanData);

router.get('/', getGradingFanData);

router.get('/:query', findGradingFan);

router.get('/:query1/:query2', findGradingFanToken);

export default router;