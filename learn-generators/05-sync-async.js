'use strict'

const fs = require('fs')

function run (generator) {
  const it = generator(go)

  function go (err, result) {
    if (err) it.throw(err)
    else it.next(result)
  }

  go()
}

run(function* (done) {
  let firstFile
  try {  
    const dirFiles = yield fs.readdir('NonONoNoNo', done)
    firstFile = dirFiles[0]
  } catch (e) {
    firstFile = null    
  }
  console.log(firstFile)
})