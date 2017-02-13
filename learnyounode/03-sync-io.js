const fs = require('fs')

const data = process.argv[2] ? fs.readFileSync(process.argv[2]) : ''

function count(elements) {
  return elements.reduce(count => count + 1, 0) - 1
}

console.log(count(data.toString().split('\n')))
