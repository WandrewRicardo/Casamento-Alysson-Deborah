const presentesService = require('../services/presentesService.js')

async function listarPresentes(req, res) {
   const presentes = await presentesService.listarPresentes()
    return res.status(200).json(presentes)
}

module.exports = {
    listarPresentes
}