import timeModel from '../models/time-model.js';

export const getTimeData = async (req, res) => { 
    try {
        const timeData = await timeModel.find();
        res.status(200).json(timeData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addTimeData = async (req, res) => {
    
    const {indexT, affTimeMin, negTimeMin, affTimeSec, negTimeSec, affTotalSec, negTotalSec} = req.body;
    const newTimeData = new timeModel({indexT, affTimeMin, negTimeMin, affTimeSec, negTimeSec, affTotalSec, negTotalSec});
    try {
        await newTimeData.save();
        res.status(201).json( newTimeData );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const findTime = async (req, res) =>{
    var query = req.params.query;
    // console.log(query)
    timeModel.find({
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