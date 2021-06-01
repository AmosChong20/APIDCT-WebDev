import express from 'express';

import { addGradingBestFinalData, getGradingBestFinalData ,findGradingBestFinal} from '../controllers/gradingBestFinal-controller';

const router = express.Router();


router.post('/', addGradingBestFinalData);

router.get('/', getGradingBestFinalData);

router.get('/:query', findGradingBestFinal);

export default router;