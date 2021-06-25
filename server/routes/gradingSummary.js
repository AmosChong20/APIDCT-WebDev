import express from 'express';

import { addGradingSummaryData, getGradingSummaryData ,findGradingSummary , findGradingSummaryToken} from '../controllers/gradingSummary-controller.js';

const router = express.Router();


router.post('/', addGradingSummaryData);

router.get('/', getGradingSummaryData);

router.get('/:query', findGradingSummary);

router.get('/:query1/:query2', findGradingSummaryToken);

export default router;