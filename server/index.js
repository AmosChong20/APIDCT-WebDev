import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import registerRoutes from '../server/routes/register.js';


const app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use('/register',registerRoutes);


//mongodb atlas
const CONNECTION_URL = 'mongodb+srv://pikacent:pikacent1218@cluster0.jqxyy.mongodb.net/<dbname>?retryWrites=true&w=majority'


app.get('/',(req,res) =>{
  res.send('This Works!');
  console.log("sdasdasdasd");
});

// app.post('/register',(req,res) =>{
//   console.log(req.body);
// })



mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


  mongoose.set('useFindAndModify', false);