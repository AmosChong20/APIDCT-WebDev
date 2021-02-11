import registerModel from '../models/register-model.js';

var randomToken = require('random-token').create('abcdefghijklmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');

export const getRegisterData = async (req, res) => { 
    try {
        const registerData = await registerModel.find();
        res.status(200).json(registerData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addRegisterData = async (req, res) => {
    var token = randomToken(16); 
    const { engSchoolName, chiSchoolName, engTeamLeaderName, chiTeamLeaderName, teamLeaderContact, teamLeaderEmail, debateTopics_1, debateTopics_2, token } = req.body;
    const newRegisterData = new registerModel({ engSchoolName, chiSchoolName, engTeamLeaderName, chiTeamLeaderName, teamLeaderContact, teamLeaderEmail, debateTopics_1, debateTopics_2 ,token })
    try {
        console.log(newRegisterData)
        await newRegisterData.save();
        res.status(201).json( newRegisterData );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
