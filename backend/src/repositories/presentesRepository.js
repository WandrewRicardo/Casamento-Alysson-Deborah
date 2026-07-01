const pool = require('../db/index.js')

async function listarPresentes () {
    const presentes = await pool.query (
        'SELECT * FROM presentes'
    )
    return presentes.rows;
}

module.exports = {
    listarPresentes
}