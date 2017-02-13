const fs = require('fs')
const path = require('path')

function filterList(ext, cb) {
  return function(err, list) {
    if (err) {
      return cb(err)
    }
    else {
      cb(null, list.filter(filename => path.extname(filename) === `.${ext}`))
    }
  }
}

module.exports = function (dir, extension, cb) {
  fs.readdir(dir, filterList(extension, cb))
}
