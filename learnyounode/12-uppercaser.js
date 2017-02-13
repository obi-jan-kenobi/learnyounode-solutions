const http = require('http')

http.createServer((req, res) => {
  if (req.method !== 'POST') {
    return res.send('only post')
  }
  res.writeHead(200, {'content-type': 'text/plain'})
  req.setEncoding('utf8')
  req.on('data', data => {
    res.write(data.toUpperCase())
  })
  req.on('end', () => {
    res.end()
  })
}).listen(process.argv[2])
