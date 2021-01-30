import registerModel from '../models/register-model.js';

export const addRegisterData = async (req, res) => {
    const { engSchoolName, chiSchoolName, engTeamLeaderName, chiTeamLeaderNam, teamLeaderContact, teamLeaderEmail, debateTopics_1, debateTopics_2 } = req.body;

    const newRegisterData = new registerModel({ engSchoolName, chiSchoolName, engTeamLeaderName, chiTeamLeaderNam, teamLeaderContact, teamLeaderEmail, debateTopics_1, debateTopics_2 })
    
    try {
        console.log(newRegisterData)
        await newRegisterData.save();
        res.status(201).json( newRegisterData );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
