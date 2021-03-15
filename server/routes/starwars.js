import express from 'express';

import {getTime, getStarwarsData} from '../controllers/starwars-controller.js';

const router = express.Router();


// router.post('/', addStarwarsData);

router.get('/', getStarwarsData);

router.get('/time', getTime);

// router.put('/:query', updateToken);

// router.get('/:query', checkUsed);

// router.get('/:query', updateToken);





export default router;

