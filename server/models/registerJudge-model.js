import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const resgisterJudgeSchema = mongoose.Schema({
    judgeChiName : String,
    indexA : Array,
    token : String,
})

// registerModel.plugin(uniqueValidator);
resgisterJudgeSchema.index({ token: "text" });
var registerJudgeModel = mongoose.model('RegisterJudge', resgisterJudgeSchema);


export default registerJudgeModel;

