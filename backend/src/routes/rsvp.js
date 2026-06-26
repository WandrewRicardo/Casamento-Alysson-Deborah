const rsvpController = require('../controllers/rsvpController.js')
const express = require('express')
const router = express.Router()

router.post('/rsvp', rsvpController)

module.exports = router