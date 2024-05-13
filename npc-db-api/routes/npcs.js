const express = require('express');
const router = express.Router();

const {getAllNpcs,
       createNpc,
       getNpc,
       updateNpc,
       deleteNpc
      } = require('../controllers/npcs');

router.route('/').get(getAllNpcs).post(createNpc);
router.route('/:id').get(getNpc).patch(updateNpc).delete(deleteNpc);

module.exports = router;