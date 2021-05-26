import express from 'express';

import { addRegisterJudgeData, getRegisterJudgeData ,findTZJudge, updateJudge} from '../controllers/registerJudge-controller.js';

const router = express.Router();


router.post('/', addRegisterJudgeData);

router.get('/', getRegisterJudgeData);

router.get('/:query', findTZJudge);

router.put('/:query', updateJudge);

export default router;