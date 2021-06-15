import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const gradingSummaryFanSchema = mongoose.Schema({
    token: String,
    indexT: String,
    summary: Number,
    judgeChiName : String,
})

// registerModel.plugin(uniqueValidator);
gradingSummaryFanSchema.index({ indexT: "text" });
var gradingSummaryFanModel = mongoose.model('GradingSummaryFan', gradingSummaryFanSchema);


export default gradingSummaryFanModel;

