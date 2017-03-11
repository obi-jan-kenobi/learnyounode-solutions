'use strict'

const fs = require('fs')

function askFoo() {
  return Promise.resolve('foo')    
}

function run (generator) {
  const it = generator()

  function go (result) {
    if (result.done) return Promise.resolve(result.value)
    return Promise.resolve(result.value)
      .then(res => go(it.next(res)))
  }

  go(it.next())
}

run(function* () {
  const foo = yield askFoo()
  console.log(foo)
})
