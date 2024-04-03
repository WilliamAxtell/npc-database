const mongoose = require('mongoose');

const NPCSchema = new mongoose.Schema({
    title:String,
    firstName:String,
    lastName:String,
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