import express from 'express';

import { addStarwarsData, getStarwarsData, checkUsed } from '../controllers/starwars-controller.js';

const router = express.Router();


router.post('/', addStarwarsData);

router.get('/', getStarwarsData);

router.get('/:query', checkUsed);


export default router;