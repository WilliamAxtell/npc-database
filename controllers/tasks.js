const getAllNpcs = (req, res) => {
    res.send('get all npcs');
};

const createNpc = (req, res) => {
    res.json(req.body);
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