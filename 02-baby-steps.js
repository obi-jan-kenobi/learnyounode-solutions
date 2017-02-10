const [x, y, ...summands] = process.argv

function sum(summands) {
  return summands.reduce((prev, curr) => +prev + +curr)
}

console.log(sum(summands))
