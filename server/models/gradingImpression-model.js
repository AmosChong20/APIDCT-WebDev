import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const gradingImpressionSchema = mongoose.Schema({
    token: String,
    indexT: String,
    impression: Number,
})

// registerModel.plugin(uniqueValidator);
gradingImpressionSchema.index({ indexT: "text" });
var gradingImpressionModel = mongoose.model('GradingImpression', gradingImpressionSchema);


export default gradingImpressionModel;

