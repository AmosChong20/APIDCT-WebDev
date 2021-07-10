import gradingSummaryModel from '../models/gradingSummary-model.js';

export const getGradingSummaryData = async (req, res) => { 
    try {
        const gradingSummaryData = await gradingSummaryModel.find();
        res.status(200).json(gradingSummaryData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addGradingSummaryData = async (req, res) => {
    const {token,indexT,judgeChiName,summary} = req.body;
    const newGradingSummaryData = new gradingSummaryModel({token,indexT,judgeChiName,summary});
    try {
        await newGradingSummaryData.save();
        res.status(201).json( newGradingSummaryData );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const findGradingSummary = async (req, res) =>{
    var query = req.params.query;
    // console.log(query)
    gradingSummaryModel.find({
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

export const findGradingSummaryToken = async (req, res) =>{
    var query1 = req.params.query1;
    var query2 = req.params.query2;
    gradingSummaryModel.find({
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