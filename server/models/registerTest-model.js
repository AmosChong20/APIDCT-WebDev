import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const resgisterTestSchema = mongoose.Schema({
    chiTeamLeaderName: String,
    token : String,
})

// registerModel.plugin(uniqueValidator);
resgisterTestSchema.index({ token: "text" });
var registerTestModel = mongoose.model('RegisterTest', resgisterTestSchema);


export default registerTestModel;

