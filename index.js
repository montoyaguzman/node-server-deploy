const http = require('http')
const fs = require('fs')
const hostname = 'localhost'
const port = 3000
let webPageLocal = 'app.html'
let webPageTest = './deploy/index.html'

const server = http.createServer( (req, res) => {
    fs.readFile(`${webPageLocal}`, (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length})
        res.write(data)
        res.end()
    });
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})