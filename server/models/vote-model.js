import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const voteSchema = mongoose.Schema({
    indexT : String,
    affVote: Number,
    negVote: Number,
    affVoteAfter: Number,
    negVoteAfter: Number,

})

// registerModel.plugin(uniqueValidator);
voteSchema.index({ indexT: "text" });
var voteModel = mongoose.model('vote', voteSchema);


export default voteModel;

