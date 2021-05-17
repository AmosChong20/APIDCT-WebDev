import express from 'express';

import { addRegisterTopicData, getRegisterTopicData ,findTZTopic} from '../controllers/registerTopic-controller.js';

const router = express.Router();


router.post('/', addRegisterTopicData);

router.get('/', getRegisterTopicData);

router.get('/:query', findTZTopic);

export default router;