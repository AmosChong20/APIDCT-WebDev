import registerModel from '../models/register-model.js';

import randomToken from 'random-token';

export const getRegisterData = async (req, res) => { 
    try {
        const registerData = await registerModel.find();
        res.status(200).json(registerData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addRegisterData = async (req, res) => {
    var token_1 = randomToken(16); 
    const { engSchoolName, chiSchoolName, engTeamLeaderName, chiTeamLeaderName, teamLeaderContact, teamLeaderEmail, debateTopics_1, debateTopics_2,token} = req.body;
    const newRegisterData = new registerModel({ engSchoolName, chiSchoolName, engTeamLeaderName, chiTeamLeaderName, teamLeaderContact, teamLeaderEmail, debateTopics_1, debateTopics_2,token});
    newRegisterData.token = token_1;
    try {
        // console.log(newRegisterData)
        await newRegisterData.save();
        res.status(201).json( newRegisterData );
    } catch (error) {
        if ((error.message)[7]=='d'){
            res.status(401).json({ message: error.message });
        }
        res.status(409).json({ message: error.message });
    }
}

export const findTZ = async (req, res) =>{
    var query = req.params.query;
    // console.log(query)
    registerModel.find({
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