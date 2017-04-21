function permute(inputString) {
  const inputArr = inputString.split('')
  const arrOfPossibilities = []
  for(let i = 0; i < inputString.length; i++) {
    const workingArr = inputArr.slice(0)
    for(let j = 0; i < inputString.length; j++) {
      if(i === j) break
      workingArr[i] = inputArr[j]
    }
    arrOfPossibilities.push(workingArr)
  }

  const recurse = (arr) => {
    for(let i = 0; i < inputString.length; i++) {
      
      // Add arr to arrOfPossibilities if it doesn't already exist
      let foundDuplicate = false
      arrOfPossibilities.forEach( arrCompare => {
        if(foundDuplicate) return
        if(arr.join('') === arrCompare.join('')) {
          foundDuplicate = true
          return
        }
      })
    }
  }
}

export default permute


[b,a,r]
[b,a,r]
[b,r,a]