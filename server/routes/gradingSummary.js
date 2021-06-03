import express from 'express';

import { addGradingSummaryData, getGradingSummaryData ,findGradingSummary} from '../controllers/gradingSummary-controller.js';

const router = express.Router();


router.post('/', addGradingSummaryData);

router.get('/', getGradingSummaryData);

router.get('/:query', findGradingSummary);

export default router;