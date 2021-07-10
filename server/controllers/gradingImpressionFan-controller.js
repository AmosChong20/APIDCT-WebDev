import gradingImpressionFanModel from '../models/gradingImpressionFan-model.js';

export const getGradingImpressionFanData = async (req, res) => { 
    try {
        const gradingImpressionFanData = await gradingImpressionFanModel.find();
        res.status(200).json(gradingImpressionFanData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addGradingImpressionFanData = async (req, res) => {
    const {token,indexT,judgeChiName,impression} = req.body;
    const newGradingImpressionFanData = new gradingImpressionFanModel({token,indexT,judgeChiName,impression});
    try {
        await newGradingImpressionFanData.save();
        res.status(201).json( newGradingImpressionFanData );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const findGradingImpressionFan = async (req, res) =>{
    var query = req.params.query;
    // console.log(query)
    gradingImpressionFanModel.find({
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

export const findGradingImpressionFanToken = async (req, res) =>{
    var query1 = req.params.query1;
    var query2 = req.params.query2;
    gradingImpressionFanModel.find({
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