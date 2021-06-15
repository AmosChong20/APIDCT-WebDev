import gradingBestFinalModel from '../models/gradingBestFinal-model.js';

export const getGradingBestFinalData = async (req, res) => { 
    try {
        const gradingBestFinalData = await gradingBestFinalModel.find();
        res.status(200).json(gradingBestFinalData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addGradingBestFinalData = async (req, res) => {
    const {token,indexT,selected,judgeChiName} = req.body;
    const newGradingBestFinalData = new gradingBestFinalModel({token,indexT,selected,judgeChiName});
    try {
        await newGradingBestFinalData.save();
        res.status(201).json( newGradingBestFinalData );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const findGradingBestFinal = async (req, res) =>{
    var query = req.params.query;
    // console.log(query)
    gradingBestFinalModel.find({
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