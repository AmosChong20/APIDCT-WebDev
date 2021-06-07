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
    const {token,indexT,summary} = req.body;
    const newGradingSummaryFanData = new gradingSummaryFanModel({token,indexT,summary});
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