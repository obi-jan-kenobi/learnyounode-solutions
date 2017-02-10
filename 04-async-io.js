const fs = require('fs')

function count(elements) {
  return elements.reduce(count => count + 1, 0) - 1
}

fs.readFile(process.argv[2], (err, data) => {
  if (err) {
    return
  } else {
    console.log(count(data.toString().split('\n')))
  }
})
