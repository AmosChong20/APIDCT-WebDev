import express from 'express';

import { addGradingTableData, getGradingTableData ,findGradingTable} from '../controllers/gradingTable-controller.js';

const router = express.Router();


router.post('/', addGradingTableData);

router.get('/', getGradingTableData);

router.get('/:query', findGradingTable);

export default router;