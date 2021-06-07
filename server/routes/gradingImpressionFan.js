import express from 'express';

import { addGradingImpressionFanData, getGradingImpressionFanData ,findGradingImpressionFan} from '../controllers/gradingImpressionFan-controller.js';

const router = express.Router();


router.post('/', addGradingImpressionFanData);

router.get('/', getGradingImpressionFanData);

router.get('/:query', findGradingImpressionFan);

export default router;