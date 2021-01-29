import mongoose from 'mongoose';


const resgisterSchema = mongoose.Schema({
    engSchoolName: String,
    chiSchoolName: String,
    engTeamLeaderName: String,
    chiTeamLeaderNam: String,
    teamLeaderContact: String,
    teamLeaderEmail: String,
    debateTopics_1: String,
    debateTopics_2: String,
})

var registerData = mongoose.model('registerData', resgisterSchema);

export default registerData;

