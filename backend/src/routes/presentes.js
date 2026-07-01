const presenteController = require('../controllers/presentesController.js')
const express = require('express')
const router = express.Router()

router.get('/api/presentes', presenteController.listarPresentes)

module.exports = router