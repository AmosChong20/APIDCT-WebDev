import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const gradingImpressionFanSchema = mongoose.Schema({
    token: String,
    indexT: String,
    impression: Number,
})

// registerModel.plugin(uniqueValidator);
gradingImpressionFanSchema.index({ indexT: "text" });
var gradingImpressionFanModel = mongoose.model('GradingImpressionFan', gradingImpressionFanSchema);


export default gradingImpressionFanModel;

