import mongoose from 'mongoose';

const starwarsSchema = mongoose.Schema({
    token: String,
    time1: String,
    time2: String,
    name: String,
})

// registerModel.plugin(uniqueValidator);
starwarsSchema.index({ token: "text" });
var starwarsModel = mongoose.model('StarWars', starwarsSchema);


export default starwarsModel;

