import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const gradingFanSchema = mongoose.Schema({
    token: String,
    indexT: String,
    judgeChiName : String,
    affLilun : Number,
    affZhixun : Number,
    affDabian : Number,
    affBolun : Number,
    affFirstAttack : Number,
    affChenci : Number,
    affSecondAttack : Number,
    affFirstFinal : Number,
    affSecondFinal : Number,
    affLanguage : Number,
    affFree : Number,
    affTeamwork : Number,
    affTotal : Number,
    negLilun : Number,
    negZhixun : Number,
    negDabian : Number,
    negBolun : Number,
    negFirstAttack : Number,
    negChenci : Number,
    negSecondAttack : Number,
    negFirstFinal : Number,
    negSecondFinal : Number,
    negLanguage : Number,
    negFree : Number,
    negTeamwork : Number,
    negTotal : Number
})

// registerModel.plugin(uniqueValidator);
gradingFanSchema.index({ indexT: "text" , token: "text"});
var gradingFanModel = mongoose.model('GradingFan', gradingFanSchema);


export default gradingFanModel;

