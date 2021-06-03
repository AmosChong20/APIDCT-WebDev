import express from 'express';

import { addGradingFanData, getGradingFanData ,findGradingFan} from '../controllers/gradingFan-controller';

const router = express.Router();


router.post('/', addGradingFanData);

router.get('/', getGradingFanData);

router.get('/:query', findGradingFan);

export default router;