import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const gradingBestFinalSchema = mongoose.Schema({
    token: String,
    indexT: String,
    selected: Array,
    judgeChiName : String,
})

// registerModel.plugin(uniqueValidator);
gradingBestFinalSchema.index({ indexT: "text" , token: "text"});
var gradingBestFinalModel = mongoose.model('GradingBestFinal', gradingBestFinalSchema);


export default gradingBestFinalModel;

