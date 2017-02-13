const filterlist = require('./06-filter-module')

filterlist(process.argv[2], process.argv[3], function(err, list) {
  if (err) {
    console.log(err)
  } else {
    list.forEach(f => {console.log(f)})
  }
})
