import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const gradingFanSchema = mongoose.Schema({
    token: String,
    indexT: String,
    selected: Array,
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
gradingFanSchema.index({ indexT: "text" });
var gradingFanModel = mongoose.model('GradingFan', gradingFanSchema);


export default gradingFanModel;

{token,indexT,selecte,affLilun ,affZhixun ,affDabian ,affBolun ,affFirstAttack ,affChenci ,affSecondAttack ,affFirstFinal ,affSecondFinal ,affLanguage ,affFree ,affTeamwork ,affTotal ,negLilun ,negZhixun ,negDabian ,negBolun ,negFirstAttack ,negChenci ,negSecondAttack ,negFirstFinal ,negSecondFinal ,negLanguage ,negFree ,negTeamwork ,negTotal}