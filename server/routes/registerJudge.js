import express from 'express';

import { addRegisterJudgeData, getRegisterJudgeData ,findTZJudge} from '../controllers/registerJudge-controller.js';

const router = express.Router();


router.post('/', addRegisterJudgeData);

router.get('/', getRegisterJudgeData);

router.get('/:query', findTZJudge);

export default router;