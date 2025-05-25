const express = require ('express');

const { InfoController } = require('../../controllers')

const router = express.Router();

//info-controller
router.get('/info', InfoController.info);

module.exports = router;