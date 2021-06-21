import express from 'express';

import { addGradingTableData, getGradingTableData ,findGradingTable, findGradingTableToken} from '../controllers/gradingTable-controller.js';

const router = express.Router();


router.post('/', addGradingTableData);

router.get('/', getGradingTableData);

router.get('/:query', findGradingTable);

router.get('/:query1/:query2', findGradingTableToken);

export default router;