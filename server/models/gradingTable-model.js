import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const gradingTableSchema = mongoose.Schema({
    token: String,
    indexT: String,
    judgeChiName : String,
    rows: Array,
    affDef: Number,
    affFree: Number,
    affTeamwork: Number,
    negDef: Number,
    negFree: Number,
    negTeamwork: Number,
    affTotal: Number,
    negTotal: Number,
})

// registerModel.plugin(uniqueValidator);
gradingTableSchema.index({ indexT: "text" , token: "text"});
var gradingTableModel = mongoose.model('GradingTable', gradingTableSchema);


export default gradingTableModel;

