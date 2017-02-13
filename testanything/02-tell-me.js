const assert = require('assert')
const coolNumber = require(process.argv[2])

assert(coolNumber(42) === true, 'coolNumber(42) should return true')
