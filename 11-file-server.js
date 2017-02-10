const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' })
  const rStream = fs.createReadStream(process.argv[3])
  rStream.pipe(res)
  rStream.on('end', () => {
    res.end()
  })
}).listen(process.argv[2])
