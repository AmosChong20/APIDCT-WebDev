import express from 'express';

import { addGradingImpressionData, getGradingImpressionData ,findGradingImpression , findGradingImpressionToken} from '../controllers/gradingImpression-controller.js';

const router = express.Router();


router.post('/', addGradingImpressionData);

router.get('/', getGradingImpressionData);

router.get('/:query', findGradingImpression);

router.get('/:query1/:query2', findGradingImpressionToken);

export default router;