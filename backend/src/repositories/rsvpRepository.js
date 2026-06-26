const pool = require('../db/index.js')


async function buscarConvite (numero_convite) {
   const convite = await pool.query(
        'SELECT * FROM convites WHERE numero_convite = $1', [numero_convite]
    )
    return convite;
 }

async function buscarConfirmacao (convite_id) {
    const confirmacao = await pool.query(
        'SELECT * FROM confirmacoes WHERE convite_id = $1',[convite_id]
    )
    return confirmacao
}

async function adicionarConfirmacao (convite_id, nome) {
    await pool.query(
    'INSERT INTO confirmacoes (convite_id, nome) VALUES ($1, $2)',[convite_id, nome]
    )
}

module.exports = {
    buscarConvite, buscarConfirmacao, adicionarConfirmacao
}
