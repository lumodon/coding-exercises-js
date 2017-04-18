import { expect } from 'chai'
import guessTheNumber from '../src/guessTheNumber'

describe('guessTheNumber()', () => {

  it('Should expect something', function() {
    this.timeout(300000)
    guessTheNumber()
    process.stdout.once('4', response => {
      console.log(response)
    }
    console.log(process.stdout)
    expect(true).to.be.true
  })
  
})
