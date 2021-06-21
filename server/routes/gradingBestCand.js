import express from 'express';

import { addGradingBestCandData, getGradingBestCandData ,findGradingBestCand, findGradingBestCandToken} from '../controllers/gradingBestCand-controller.js';

const router = express.Router();


router.post('/', addGradingBestCandData);

router.get('/', getGradingBestCandData);

router.get('/:query', findGradingBestCand);

router.get('/:query1/:query2', findGradingBestCandToken);

export default router;