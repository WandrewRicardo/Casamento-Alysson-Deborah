const pool = require('./index')

pool.query('SELECT NOW()', (erro, resultado) => {
  if (erro) {
    console.log('Erro na conexão:', erro)
  } else {
    console.log('Conexão bem sucedida:', resultado.rows[0])
  }
})