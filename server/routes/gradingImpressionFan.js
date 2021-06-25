import express from 'express';

import { addGradingImpressionFanData, getGradingImpressionFanData ,findGradingImpressionFan, findGradingImpressionFanToken} from '../controllers/gradingImpressionFan-controller.js';

const router = express.Router();


router.post('/', addGradingImpressionFanData);

router.get('/', getGradingImpressionFanData);

router.get('/:query', findGradingImpressionFan);

router.get('/:query1/:query2', findGradingImpressionFanToken);

export default router;