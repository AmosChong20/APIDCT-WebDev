import registerJudgeModel from '../models/registerJudge-model.js';

import randomToken from 'random-token';

export const getRegisterJudgeData = async (req, res) => { 
    try {
        const registerJudgeData = await registerJudgeModel.find();
        res.status(200).json(registerJudgeData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addRegisterJudgeData = async (req, res) => {
    var token_1 = randomToken(16); 
    const {judgeChiName,token,indexA} = req.body;
    const newRegisterJudgeData = new registerJudgeModel({judgeChiName,token,indexA});
    newRegisterJudgeData.token = token_1;
    try {
        // console.log(newRegisterTestData)
        await newRegisterJudgeData.save();
        res.status(201).json( newRegisterJudgeData );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const findTZJudge = async (req, res) =>{
    var query = req.params.query;
    // console.log(query)
    registerJudgeModel.find({
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

export const updateJudge = async (req, res) =>{
    var query = req.params.query;
    registerJudgeModel.find({
        $text: {
            $search: query
        }
    }, function(err, result) {
        if (err) throw err;
        if (result) {
            try{
                result[0].indexA= req.body.indexA;
                result[0].save();
            }
            catch(err){
                // console.log(err);
            }
            // console.log(result[0].count);
            res.status(200).json(result);
        } else {
            res.send(JSON.stringify({
                error : 'Error'
            }))
        }
    })
}