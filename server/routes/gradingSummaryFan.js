import express from 'express';

import { addGradingSummaryFanData, getGradingSummaryFanData ,findGradingSummaryFan} from '../controllers/gradingSummaryFan-controller.js';

const router = express.Router();


router.post('/', addGradingSummaryFanData);

router.get('/', getGradingSummaryFanData);

router.get('/:query', findGradingSummaryFan);

export default router;