const fs = require('fs')
const path = require('path')

const dir = process.argv[2]
const extension = process.argv[3]

function filterList(ext, cb) {
  return function(err, list) {
    list
      .filter(filename => path.extname(filename) === `.${ext}`)
      .forEach(f => cb(f))
  }
}

fs.readdir(dir, filterList(extension, console.log))
