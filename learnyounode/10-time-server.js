const net = require('net')

function zeroFill(e) {
  return `${e}`.length === 1 ? '0' + e : e
}

net.createServer(connection => {

  const now = new Date()
  const year = now.getFullYear()
  const month = zeroFill(now.getMonth() + 1)
  const day = zeroFill(now.getDate())
  const hour = zeroFill(now.getHours())
  const minutes = zeroFill(now.getMinutes())

  connection.write(`${year}-${month}-${day} ${hour}:${minutes}` + '\n')
  connection.end()

}).listen(process.argv[2])
