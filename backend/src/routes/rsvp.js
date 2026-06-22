const poll = require ('../db/index')

async function rsvpRoute(req, res) {
    let body = ''

    req.on('data', (chunk) => {
        body += chunk.toString()
    })

    req.on('end', async ()=> {
        const {nome, numero_convite} = JSON.parse(body)

        const convites = await poll.query (
            'SELECT * FROM convites WHERE numero_convite = $1', [numero_convite]
        )
        if (convites.rows.length === 0) {
            res.writeHead(404, {'Content-Type' : 'application/json'})
            res.end (JSON.stringfy ({mensagem: 'Convite não encontrado'}))
            return
        }
        await pool.query (
            'INSERT INTO confirmacoes (convite_id, nome) VALUES ($1, $2)', [convites.rows[0].id, nome]
        )

        res.writeHead(201, {'Content-Type' : 'application/json'})
        res.end(JSON.stringify({mensagem: 'Presença confirmada com sucesso!'}))
    })
}

module.exports = rsvpRoute