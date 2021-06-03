import express from 'express';

import { addGradingBestCandData, getGradingBestCandData ,findGradingBestCand} from '../controllers/gradingBestCand-controller.js';

const router = express.Router();


router.post('/', addGradingBestCandData);

router.get('/', getGradingBestCandData);

router.get('/:query', findGradingBestCand);

export default router;