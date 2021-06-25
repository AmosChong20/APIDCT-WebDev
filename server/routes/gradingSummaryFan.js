import express from 'express';

import { addGradingSummaryFanData, getGradingSummaryFanData ,findGradingSummaryFan ,findGradingSummaryFanToken} from '../controllers/gradingSummaryFan-controller.js';

const router = express.Router();


router.post('/', addGradingSummaryFanData);

router.get('/', getGradingSummaryFanData);

router.get('/:query', findGradingSummaryFan);

router.get('/:query1/:query2', findGradingSummaryFanToken);

export default router;