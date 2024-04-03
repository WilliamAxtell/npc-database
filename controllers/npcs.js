const NPC = require('../models/npcs');


const getAllNpcs = (req, res) => {
    res.send('get all npcs');
};

const createNpc = async (req, res) => {
    const npc = await NPC.create(req.body);
    res.status(200).json({npc});
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