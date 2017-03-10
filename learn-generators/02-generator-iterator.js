'use strict'

function *factorial(n) {
  let nextVal = 1
  for (let i = 1; i <= n; i++) {
    yield nextVal = nextVal * i    
  }
}

for (let n of factorial(5)) {
  console.log(n)
}