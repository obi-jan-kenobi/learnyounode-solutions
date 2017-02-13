const tape = require('tape')
const repeatCallback = require(process.argv[2])

tape('repeatCallback', t => {
  t.plan(3)
  repeatCallback(3, () => {
    t.pass()
  })
})
