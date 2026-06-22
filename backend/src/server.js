const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    const arquivo = fs.readFileSync(path.join(__dirname, '../../frontend/index.html'))
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(arquivo)
  } else if (req.url === '/confirmacao' && req.method === 'GET') {
    const arquivo = fs.readFileSync(path.join(__dirname, '../../frontend/confirmacao.html'))
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(arquivo)
  } else if (req.url === '/presentes' && req.method === 'GET') {
    const arquivo = fs.readFileSync(path.join(__dirname, '../../frontend/presentes.html'))
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(arquivo)
  } else if (req.url.startsWith('/assets/')) {
    const caminhoArquivo = path.join(__dirname, '../../frontend', req.url)
    
    if (fs.existsSync(caminhoArquivo)) {
      const arquivo = fs.readFileSync(caminhoArquivo)
      const extensao = path.extname(req.url)
      
      const tipos = {
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.svg': 'image/svg+xml'
      }
      
      res.writeHead(200, { 'Content-Type': tipos[extensao] || 'text/plain' })
      res.end(arquivo)
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end('Arquivo não encontrado')
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Página não encontrada')
  }
})

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})