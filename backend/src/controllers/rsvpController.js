const rsvpService = require('../services/rsvpService.js')

async function rsvpController(req, res) {

const { nome, numero_convite } = req.body

    const resultado = await rsvpService.confirmarPresenca(nome, numero_convite)

    return res.status(resultado.status).json({
        mensagem: resultado.mensagem
    })
}

module.exports = rsvpController