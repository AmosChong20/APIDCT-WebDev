import gradingFanModel from '../models/gradingFan-model.js';

export const getGradingFanData = async (req, res) => { 
    try {
        const gradingFanData = await gradingFanModel.find();
        res.status(200).json(gradingFanData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addGradingFanData = async (req, res) => {
    const {token,indexT,judgeChiName,affLilun ,affZhixun ,affDabian ,affBolun ,affFirstAttack ,affChenci ,affSecondAttack ,affFirstFinal ,affSecondFinal ,affLanguage ,affFree ,affTeamwork ,affTotal ,negLilun ,negZhixun ,negDabian ,negBolun ,negFirstAttack ,negChenci ,negSecondAttack ,negFirstFinal ,negSecondFinal ,negLanguage ,negFree ,negTeamwork ,negTotal}= req.body;
    const newGradingFanData = new gradingFanModel({token,indexT,judgeChiName,affLilun ,affZhixun ,affDabian ,affBolun ,affFirstAttack ,affChenci ,affSecondAttack ,affFirstFinal ,affSecondFinal ,affLanguage ,affFree ,affTeamwork ,affTotal ,negLilun ,negZhixun ,negDabian ,negBolun ,negFirstAttack ,negChenci ,negSecondAttack ,negFirstFinal ,negSecondFinal ,negLanguage ,negFree ,negTeamwork ,negTotal});
    try {
        await newGradingFanData.save();
        res.status(201).json( newGradingFanData );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const findGradingFan = async (req, res) =>{
    var query = req.params.query;
    // console.log(query)
    gradingFanModel.find({
        $text: {
            $search: query
        }
    }, function(err, result) {
        if (err) throw err;
        if (result) {
            // console.log(result);
            res.json(result)
        } else {
            res.send(JSON.stringify({
                error : 'Error'
            }))
        }
    })
}


export const findGradingFanToken = async (req, res) =>{
    var query1 = req.params.query1;
    var query2 = req.params.query2;
    gradingFanModel.find({
        $and: [{ indexT : query1 },  { token: query2 }]
    }, function(err, result) {
        if (err) throw err;
        if (result) {
            // console.log(result);
            res.json(result)
        } else {
            res.send(JSON.stringify({
                error : 'Error'
            }))
        }
    })
}