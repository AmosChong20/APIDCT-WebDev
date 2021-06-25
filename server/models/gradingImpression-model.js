import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const gradingImpressionSchema = mongoose.Schema({
    token: String,
    indexT: String,
    impression: Number,
    judgeChiName : String,
})

// registerModel.plugin(uniqueValidator);
gradingImpressionSchema.index({ indexT: "text" , token: "text"});
var gradingImpressionModel = mongoose.model('GradingImpression', gradingImpressionSchema);


export default gradingImpressionModel;

