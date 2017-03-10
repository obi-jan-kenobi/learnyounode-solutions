'use strict'

const fs = require('fs')

function askFoo() {
  return new Promise.resolve('foo')    
}

function run (generator) {
  const it = generator(go)

  function go (err, result) {
    if (err) it.throw(err)
    else it.next(result)
  }

  go()
}