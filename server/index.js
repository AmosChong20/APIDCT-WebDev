import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { port } from "./config.js";

import registerRoutes from '../server/routes/register.js';
dotenv.config();

const app = express();
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use('/register',registerRoutes);

//Remove this
app.get('/',(req,res) =>{
  res.send('This Works!');
  console.log("sdasdasdasd");
});


mongoose.connect(process.env.mongoConnectionString,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex: true
},(err)=>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        app.listen(port, () => console.log(`Server Running on Port: http://localhost:${port}`))
    }
})

