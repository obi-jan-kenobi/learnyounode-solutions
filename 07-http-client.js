const http = require('http')

http.get(process.argv[2], res => {
  res.setEncoding('utf8')
  res.on('error', console.error)
  res.on('data', console.log)
}).on('error', console.error)