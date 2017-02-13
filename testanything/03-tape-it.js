const tape = require('tape')
const fancify = require(process.argv[2])

tape('fancify', t => {
  t.equal(fancify('qwe'), '~*~qwe~*~')
  t.equal(fancify('qwe', true), '~*~QWE~*~')
  t.equal(fancify('qwe', false, 'X'), '~X~qwe~X~')
  t.end()
})
