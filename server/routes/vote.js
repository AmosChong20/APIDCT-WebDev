import express from 'express';

import { addVoteData, getVoteData ,findVote} from '../controllers/vote-controller.js';

const router = express.Router();


router.post('/', addVoteData);

router.get('/', getVoteData);

router.get('/:query', findVote);

export default router;