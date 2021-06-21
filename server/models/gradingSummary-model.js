import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const gradingSummarySchema = mongoose.Schema({
    token: String,
    indexT: String,
    summary: Number,
    judgeChiName : String,
})

// registerModel.plugin(uniqueValidator);
gradingSummarySchema.index({ indexT: "text" , token: "text"});
var gradingSummaryModel = mongoose.model('GradingSummary', gradingSummarySchema);


export default gradingSummaryModel;

