const NPC = require('../models/NPCs');


const getAllNpcs = async (req, res) => {
    try {
        const npcs = await NPC.find({});
        res.status(200).json({npcs});
    } catch (error) {
        res.status(500).json({msg: error});
    }
};

const createNpc = async (req, res) => {
    try {
        const npc = await NPC.create(req.body);
        res.status(200).json({npc});
    } catch (error) {
        res.status(500).json({msg: error});
    }
};

const getNpc = (req, res) => {
    res.json({id:req.params.id});
};

const updateNpc = (req, res) => {
    res.send('update npc');
};

const deleteNpc = (req, res) => {
    res.send('delete npc');
};

module.exports = {
    getAllNpcs,
    createNpc,
    getNpc,
    updateNpc,
    deleteNpc
};