import registerTestModel from '../models/registerTest-model.js';

import randomToken from 'random-token';

export const getRegisterTestData = async (req, res) => { 
    try {
        const registerTestData = await registerTestModel.find();
        res.status(200).json(registerTestData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addRegisterTestData = async (req, res) => {
    var token_1 = randomToken(16); 
    const {chiTeamLeaderName,token} = req.body;
    const newRegisterTestData = new registerTestModel({chiTeamLeaderName,token});
    newRegisterTestData.token = token_1;
    try {
        // console.log(newRegisterTestData)
        await newRegisterTestData.save();
        res.status(201).json( newRegisterTestData );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const findTZTest = async (req, res) =>{
    var query = req.params.query;
    // console.log(query)
    registerTestModel.find({
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