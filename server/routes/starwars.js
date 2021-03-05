import express from 'express';

import { addStarwarsData, getStarwarsData, checkUsed, updateToken} from '../controllers/starwars-controller.js';

const router = express.Router();


router.post('/', addStarwarsData);

router.get('/', getStarwarsData);

router.get('/:query', checkUsed);

router.patch('/:query', updateToken);





export default router;