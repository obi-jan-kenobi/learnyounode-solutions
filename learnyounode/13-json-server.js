const http = require('http')
const url = require('url')

http.createServer((req, res) => {
  if (req.method !== 'GET') return res.send('only GET')
  const urlObj = url.parse(req.url, true)
  if (urlObj.pathname !== '/api/parsetime') return res.send('wrong path')
}).listen(process.argv[2])
