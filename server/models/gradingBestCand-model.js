import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const gradingBestCandSchema = mongoose.Schema({
    token: String,
    indexT: String,
    selected: Array,
    judgeChiName : String,
})

// registerModel.plugin(uniqueValidator);
gradingBestCandSchema.index({ indexT: "text" , token: "text"});
var gradingBestCandModel = mongoose.model('GradingBestCand', gradingBestCandSchema);


export default gradingBestCandModel;

