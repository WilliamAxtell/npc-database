const express = require('express');
const router = express.Router();

const {getAllNpcs,
       createNpc,
       getNpc,
       updateNpc,
       deleteNpc
      } = require('../controllers/tasks');

router.route('/').get(getAllNpcs).post(createNpc);
router.route('/:id').get(getNpc).patch(updateNpc).delete(deleteNpc);

module.exports = router;