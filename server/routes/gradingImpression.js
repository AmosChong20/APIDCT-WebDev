import express from 'express';

import { addGradingImpressionData, getGradingImpressionData ,findGradingImpression} from '../controllers/gradingImpression-controller.js';

const router = express.Router();


router.post('/', addGradingImpressionData);

router.get('/', getGradingImpressionData);

router.get('/:query', findGradingImpression);

export default router;