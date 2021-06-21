import express from 'express';

import { addGradingBestFinalData, getGradingBestFinalData ,findGradingBestFinal , findGradingBestFinalToken} from '../controllers/gradingBestFinal-controller.js';

const router = express.Router();


router.post('/', addGradingBestFinalData);

router.get('/', getGradingBestFinalData);

router.get('/:query', findGradingBestFinal);

router.get('/:query1/:query2', findGradingBestFinalToken);

export default router;