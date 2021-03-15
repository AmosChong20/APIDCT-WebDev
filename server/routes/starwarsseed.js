import express from 'express';

import {getStarwarsData} from '../controllers/starwarsseed-controller.js';

const router = express.Router();

router.get('/', getStarwarsData);

export default router;

