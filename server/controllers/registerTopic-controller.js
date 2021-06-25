import registerTopicModel from '../models/registerTopic-model.js';

export const getRegisterTopicData = async (req, res) => { 
    try {
        const registerTopicData = await registerTopicModel.find();
        res.status(200).json(registerTopicData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addRegisterTopicData = async (req, res) => {
    const {topic,indexT,judgeNo,stimeh,stimem,etimeh,etimem,date,isRoadShow} = req.body;
    const newRegisterTopicData = new registerTopicModel({topic,indexT,judgeNo,stimeh,stimem,etimeh,etimem,date,isRoadShow});
    try {
        // console.log(newRegisterTestData)
        await newRegisterTopicData.save();
        res.status(201).json( newRegisterTopicData );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const findTZTopic = async (req, res) =>{
    var query = req.params.query;
    // console.log(query)
    registerTopicModel.find({
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