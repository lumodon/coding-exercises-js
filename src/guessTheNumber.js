const readline = require('readline-sync')
const MIN = 1
const MAX = 100

const rl = {
  question: (log, callback) => {
    callback(readline.question(log))
  }
}

function guessTheNumber() {
  let theNumber = Math.floor((Math.random() * 100)) + 1
  let numOfGuesses = 0

  const recurse = () => {
    numOfGuesses++
    rl.question(`Guess a number between ${MIN} and ${MAX}\n`, (answer) => {
      if(answer < theNumber) {
        console.log(`You guessed too low. The number was ${theNumber} and you gussed ${answer}`)
        recurse()
      } else if(answer > theNumber) {
        console.log(`You guessed too high. The number was ${theNumber} and you gussed ${answer}`)
        recurse()
      } else if(parseInt(answer) === parseInt(theNumber)) {
        console.log(`You got the number! The number was ${theNumber} and you guessed ${answer}`)
        return numOfGuesses
      } else if(answer === 'exit') {
        return numOfGuesses
      } else {
        console.log('Invalid command. Please type a number of \'exit\' (without quotes)')
        recurse()
      }
    })
  }

  recurse()
}

export default guessTheNumber