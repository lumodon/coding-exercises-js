import { expect } from 'chai'
import guessTheNumber from '../src/guessTheNumber'

describe('guessTheNumber()', () => {

  it('Should expect something', () => {
    guessTheNumber()
    // Immediately after calling function, the guessTheNumber process will now wait
    // for user input. We need to simulate a response...
    process.stdin.once('4', response => {
      console.log(response)
    })
  })
  
})
