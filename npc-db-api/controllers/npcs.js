const NPC = require('../models/NPCs');
const asyncWrapper = require('../middleware/async');
const {createCustomError} = require('../errors/custom-errors');

const getAllNpcs = asyncWrapper(async (req, res) => {
    const npcs = await NPC.find({});
    res.status(200).json({npcs});
});

const createNpc = asyncWrapper(async (req, res) => {
    const npc = await NPC.create(req.body);
    res.status(200).json({npc});
});

const getNpc = asyncWrapper(async (req, res, next) => {
    const {id:npcID} = req.params;
    const npc = await NPC.findById({_id: npcID});
    if(!npc) {
        return next(createCustomError(`No npc with id: ${npcID} found`, 404));
    }
    res.status(200).json({npc});
});

const updateNpc = asyncWrapper(async (req, res) => {
    const {id:npcID} = req.params;
    const npc = await NPC.findOneAndUpdate({_id: npcID}, req.body, {
        new: true,
        runValidators: false
    });
    if(!npc) {
        return next(createCustomError(`No npc with id: ${npcID} found`, 404));
    }
    res.status(200).json({npc});
});

const deleteNpc = asyncWrapper(async (req, res) => {
    const {id:npcID} = req.params;
    const npc = await NPC.findOneAndDelete({_id: npcID});
    if(!npc) {
        return next(createCustomError(`No npc with id: ${npcID} found`, 404));
    }
    res.status(200).json({npc});
});

module.exports = {
    getAllNpcs,
    createNpc,
    getNpc,
    updateNpc,
    deleteNpc
};