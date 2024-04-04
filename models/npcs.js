const mongoose = require('mongoose');

const NPCSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    firstName:{
        type: String,
        required: [true,'First Name is required'],
        trim: true,
    },
    lastName:{
        type: String,
        required: [true,'Last Name is required'],
        trim: true,
    },
    folk:String,
    class:String,
    subclass:String,
    hair:String,
    eyes:String,
    generalAppearance:String,
    personalityTraits:String,
    equipment:String,
    speech:String,
});

module.exports = mongoose.model('npc', NPCSchema);