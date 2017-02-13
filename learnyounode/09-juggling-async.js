const http = require('http')

const [node, path, ...urls] = process.argv

let responses = []
let count = 0

urls.forEach((url, i) => {
  http.get(url, res => {
    body = ''
    res.setEncoding('utf8')
    res.on('data', data => {
      body += data
    })
    res.on('end', () => {
      responses[i] = body
      count++
      if (count === 3) {
        responses.forEach(r => console.log(r))
      }
    })
  })
})
