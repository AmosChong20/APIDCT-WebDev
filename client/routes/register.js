import express from 'express';

import { addRegisterData } from '../controllers/register.js';

const router = express.Router();


router.post('/', addRegisterData);

router.get('/',(req,res) =>{
  res.send('This Works!');
  console.log("sdasdasdasd");
});

export default router;