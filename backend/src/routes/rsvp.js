const pool = require ('../db/index')

async function rsvpRoute(req, res) {
    const {nome, numero_convite} = req.body
    if (!nome.trim() || !numero_convite.trim()) {
        return res.status(400).json({
            mensagem: "TODOS OS CAMPOS SÂO OBRIGATÓRIOS"
        })     
    }
    const convites = await pool.query (
        'SELECT * FROM convites WHERE numero_convite = $1', [numero_convite]
    )
    console.log(convites.rows)
    if (convites.rows.length == 0) {
        return res.status(404).json({
            mensagem: "Convite não encontrado"
        })
    }
    const confirmacoes = await pool.query(
        'SELECT * FROM confirmacoes WHERE convite_id = $1',[convites.rows[0].id]
    )
     if(confirmacoes.rows.length === 1) {
        return res.status(409).json({
            mensagem: "Convite já foi registrado"
        })
     }else {
        await pool.query(
            'INSERT INTO confirmacoes (convite_id, nome) VALUES ($1, $2)',[convites.rows[0].id, nome]
        )
     }
    return res.status(200).json({
        mensagem: "Dados recebidos com Sucesso!"
    })

}

module.exports = rsvpRoute