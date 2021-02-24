import mongoose from 'mongoose';

const starwarsSchema = mongoose.Schema({
    token: String,
    time: Array,
})

// registerModel.plugin(uniqueValidator);
starwarsSchema.index({ token: "text" });
var starwarsModel = mongoose.model('StarWars', starwarsSchema);


export default starwarsModel;

