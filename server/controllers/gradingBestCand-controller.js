import gradingBestCandModel from '../models/gradingBestCand-model.js';

export const getGradingBestCandData = async (req, res) => { 
    try {
        const gradingBestCandData = await gradingBestCandModel.find();
        res.status(200).json(gradingBestCandData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addGradingBestCandData = async (req, res) => {
    const {token,indexT,selected} = req.body;
    const newGradingBestCandData = new gradingBestCandModel({token,indexT,selected});
    try {
        await newGradingBestCandData.save();
        res.status(201).json( newGradingBestCandData );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const findGradingBestCand = async (req, res) =>{
    var query = req.params.query;
    // console.log(query)
    gradingBestCandModel.find({
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