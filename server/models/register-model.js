import mongoose from 'mongoose';

const resgisterSchema = mongoose.Schema({
    engSchoolName: String,
    chiSchoolName: String,
    engTeamLeaderName: String,
    chiTeamLeaderName: String,
    teamLeaderContact: String,
    teamLeaderEmail: String,
    debateTopics_1: String,
    debateTopics_2: String,
})

var registerModel = mongoose.model('Register', resgisterSchema);

export default registerModel;

