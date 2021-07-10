import gradingSummaryFanModel from '../models/gradingSummaryFan-model.js';

export const getGradingSummaryFanData = async (req, res) => { 
    try {
        const gradingSummaryFanData = await gradingSummaryFanModel.find();
        res.status(200).json(gradingSummaryFanData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addGradingSummaryFanData = async (req, res) => {
    const {token,indexT,judgeChiName,summary} = req.body;
    const newGradingSummaryFanData = new gradingSummaryFanModel({token,indexT,judgeChiName,summary});
    try {
        await newGradingSummaryFanData.save();
        res.status(201).json( newGradingSummaryFanData );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const findGradingSummaryFan = async (req, res) =>{
    var query = req.params.query;
    // console.log(query)
    gradingSummaryFanModel.find({
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

export const findGradingSummaryFanToken = async (req, res) =>{
    var query1 = req.params.query1;
    var query2 = req.params.query2;
    gradingSummaryFanModel.find({
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