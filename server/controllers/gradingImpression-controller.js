import gradingImpressionModel from '../models/gradingImpression-model.js';

export const getGradingImpressionData = async (req, res) => { 
    try {
        const gradingImpressionData = await gradingImpressionModel.find();
        res.status(200).json(gradingImpressionData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addGradingImpressionData = async (req, res) => {
    const {token,indexT,judgeChiName,impression} = req.body;
    const newGradingImpressionData = new gradingImpressionModel({token,indexT,judgeChiName,impression});
    try {
        await newGradingImpressionData.save();
        res.status(201).json( newGradingImpressionData );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const findGradingImpression = async (req, res) =>{
    var query = req.params.query;
    // console.log(query)
    gradingImpressionModel.find({
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

export const findGradingImpressionToken = async (req, res) =>{
    var query1 = req.params.query1;
    var query2 = req.params.query2;
    gradingImpressionModel.find({
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