import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const TimeSchema = mongoose.Schema({
    indexT : String,
    affTimeMin: Number,
    negTimeMin: Number,
    affTimeSec: Number,
    negTimeSec: Number,
    affTotalSec: Number,
    negTotalSec: Number,

})

// registerModel.plugin(uniqueValidator);
TimeSchema.index({ indexT: "text" });
var TimeModel = mongoose.model('Time', TimeSchema);


export default TimeModel;


