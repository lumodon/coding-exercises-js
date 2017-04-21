function symlink(inputArr) {
  const replacements = inputArr.slice(1, inputArr[0]+1)
  const stringToSub = inputArr.slice((inputArr.length)-1).join('')
  const substituteGroup = {}
  const reg = /(.*)(?::)(.*)/

  replacements.forEach( replacement => {
    const regExResult = replacement.match(reg)
    const key = regExResult[1]
    const value = regExResult[2]
    substituteGroup[key] = value
  })

  let ongoingString = stringToSub
  for(let reg in substituteGroup) {
    ongoingString = ongoingString.replace(new RegExp(reg), substituteGroup[reg])
  }

  return ongoingString
}

export default symlink