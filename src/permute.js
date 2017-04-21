function swap(arr, pos1, pos2) {
  const returnArr = arr.slice(0)
  const temp = returnArr[pos1]
  returnArr[pos1] = returnArr[pos2]
  returnArr[pos2] = temp
  return returnArr
}

function permute(inputString) {
  const inputArr = inputString.split('')
  const arrOfPossibilities = []

  const resurse = (group) => {
    if(group.length < 3) {
      arrOfPossibilities.push(group.join(''))
      arrOfPossibilities.push(swap(group, 0, 1).join(''))
      return
    }
    for(let i = 0; i < group.length; i++) {
      arrOfPossibilities.push(group)
      group = swap(group, 0, 1)
    }
  }

  recurse(inputArr)
}

export default permute


[b,a,r]
[b,a,r]
[b,r,a]