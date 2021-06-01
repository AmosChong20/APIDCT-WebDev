import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import { port , mongoConnectionString} from "./config.js";

import registerRoutes from './routes/register.js';
import registerTestRoutes from './routes/registerTest.js';

import registerTopicRoutes from './routes/registerTopic.js';
import registerJudgeRoutes from './routes/registerJudge.js';
import voteRoutes from './routes/vote.js';

import starwarsRoutes from './routes/starwars.js';
import starwarsmyRoutes from './routes/starwarsmy.js';
import starwarssgRoutes from './routes/starwarssg.js';
import starwarshkRoutes from './routes/starwarshk.js';
import starwarsmcRoutes from './routes/starwarsmc.js';
import starwarsauRoutes from './routes/starwarsau.js';
import starwarscmRoutes from './routes/starwarscm.js';
import starwarsukRoutes from './routes/starwarsuk.js';

import gradingTableRoutes from './routes/gradingTable.js'
import gradingSummaryRoutes from './routes/gradingSummary.js'
import gradingImpressionRoutes from './routes/gradingImpression.js'
import gradingBestCandRoutes from './routes/gradingBestCand.js'
import gradingBestFinalRoutes from './routes/gradingBestFinal.js'

const app = express();
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());
 
app.use('/register',registerRoutes);
app.use('/registerTest',registerTestRoutes);
app.use('/starwars',starwarsRoutes);

app.use('/registerTopic',registerTopicRoutes);
app.use('/registerJudge',registerJudgeRoutes);
app.use('/vote',voteRoutes);

app.use('/starwarsmy',starwarsmyRoutes);
app.use('/starwarssg',starwarssgRoutes);
app.use('/starwarshk',starwarshkRoutes);
app.use('/starwarsmc',starwarsmcRoutes);
app.use('/starwarsau',starwarsauRoutes);
app.use('/starwarscm',starwarscmRoutes);
app.use('/starwarsuk',starwarsukRoutes);

app.use('/gradingTable',gradingTableRoutes);
app.use('/gradinSummary',gradingSummaryRoutes);
app.use('/gradingImpression',gradingImpressionRoutes);
app.use('/gradinBestCand',gradingBestCandRoutes);
app.use('/gradingBestFinal',gradingBestFinalRoutes);



mongoose.connect(mongoConnectionString,{
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

