const rsvpRepository = require('../repositories/rsvpRepository.js')

async function confirmarPresenca (nome, numero_convite) {

     if (!nome.trim() || !numero_convite.trim()) {
        return {
            status: 400,
            mensagem: "TODOS OS CAMPOS SÃO OBRIGATÓRIOS"
        }
    }
    const convite = await rsvpRepository.buscarConvite(numero_convite)
    if (convite.rows.length === 0) {
        return {
            status: 404,
            mensagem: "Convite não encontrado"
        }
    }
    const confirmacao = await rsvpRepository.buscarConfirmacao(convite.rows[0].id)
    if (confirmacao.rows.length === 1) {
        return {
            status: 409,
            mensagem: "Convite já foi registrado"
        }
    }else {
        await rsvpRepository.adicionarConfirmacao(convite.rows[0].id, nome)
    }

    return {
        status: 200,
        mensagem: "Dados recebidos com sucesso"
    }

}

module.exports = {
    confirmarPresenca
}