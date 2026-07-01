const presentesRepository = require('../repositories/presentesRepository.js')

async function listarPresentes () {
    try {
        const presentes = await presentesRepository.listarPresentes()
        return presentes;
    }
    catch (error) {
        return {
        status: 500,
        mensagem: "Erro ao acessar banco de dados"
        }
    }
}

module.exports = {
    listarPresentes
}