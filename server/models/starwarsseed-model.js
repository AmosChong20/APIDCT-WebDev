import mongoose from 'mongoose';

const starwarsseedSchema = mongoose.Schema({
    name: String,
})

var starwarsseedModel = mongoose.model('StarWarsseed', starwarsseedSchema);


export default starwarsseedModel;

