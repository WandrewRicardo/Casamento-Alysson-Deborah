const rsvpRepository = require('../repositories/rsvpRepository.js')

async function confirmarPresenca (nome, numero_convite) {

     if (!nome.trim() || !numero_convite.trim()) {
        return {
            status: 400,
            mensagem: "TODOS OS CAMPOS SÃO OBRIGATÓRIOS"
        }
    }

    let convite
    let confirmacao
    try{
        convite = await rsvpRepository.buscarConvite(numero_convite)
        
        if (convite.rows.length === 0) {
            return {
                status: 404,
                mensagem: "Convite não encontrado"
            }
        }
        
        confirmacao = await rsvpRepository.buscarConfirmacao(convite.rows[0].id)

        if (confirmacao.rows.length === 1) {
            return {
                status: 409,
                mensagem: "Convite já foi registrado"
            }

        }

        await rsvpRepository.adicionarConfirmacao(convite.rows[0].id, nome)
        
    }catch (erro) {

        console.error(erro)
        
        return {
            status: 500,
            mensagem: "Erro ao acessar Banco de Dados"
        }
    }

    return {
        status: 200,
        mensagem: "Dados recebidos com sucesso"
    }

}

module.exports = {
    confirmarPresenca
}