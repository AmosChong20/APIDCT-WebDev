import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const gradingBestFinalSchema = mongoose.Schema({
    token: String,
    indexT: String,
    selected: Number,
})

// registerModel.plugin(uniqueValidator);
gradingBestFinalSchema.index({ indexT: "text" });
var gradingBestFinalModel = mongoose.model('GradingBestFinal', gradingBestFinalSchema);


export default gradingBestFinalModel;

