function factorial(operand) {
  let result = 1
  for(let i = 1; i < operand; i++) {
    result = result * i
  }
  return result
}

function lair(operand) {
  let testNumber = 1
  const MAX_ITERATIONS = 103 // The highest number Spotlight Search will attempt to go to.
  while(testNumber <= MAX_ITERATIONS + 1) {
    let result = factorial(testNumber)
    if(result === operand) {
      return --testNumber
    } else if(result > operand) {
      return 'NONE'
    } else if(testNumber >= MAX_ITERATIONS) {
      return 'EXCEEDED MAX ITERATIONS'
    }
    testNumber++
  }
}


export default lair