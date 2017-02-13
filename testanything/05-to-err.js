const feedCat = require(process.argv[2])
const tape = require('tape')

tape('feedCat', t => {
  t.equals(feedCat('dogs'), 'yum')
  t.throws(feedCat.bind(null, 'chocolate'))
  t.end()
})
