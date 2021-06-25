import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const resgisterTopicSchema = mongoose.Schema({
    topic : String,
    indexT : String,
    judgeNo: Number,
    stimeh : Number,
    stimem : Number,
    etimeh : Number,
    etimem : Number,
    date : Number,
    isRoadShow : Boolean,
})

// registerModel.plugin(uniqueValidator);
resgisterTopicSchema.index({ indexT: "text" });
var registerTopicModel = mongoose.model('RegisterTopic', resgisterTopicSchema);


export default registerTopicModel;

