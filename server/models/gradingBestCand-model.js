import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const gradingBestCandSchema = mongoose.Schema({
    token: String,
    indexT: String,
    selected: Array,
})

// registerModel.plugin(uniqueValidator);
gradingBestCandSchema.index({ indexT: "text" });
var gradingBestCandModel = mongoose.model('GradingBestCand', gradingBestCandSchema);


export default gradingBestCandModel;

