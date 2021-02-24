import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const resgisterSchema = mongoose.Schema({
    engSchoolName: String,
    chiSchoolName: String,
    engTeamLeaderName: String,
    chiTeamLeaderName: String,
    teamLeaderContact: String,
    teamLeaderEmail: { type: String, required: true, unique: true},
    // teamLeaderEmail: String,
    debateTopics_1: String,
    debateTopics_2: String,
    token : String,
})

// registerModel.plugin(uniqueValidator);
resgisterSchema.index({ token: "text" });
var registerModel = mongoose.model('Register', resgisterSchema);


export default registerModel;

