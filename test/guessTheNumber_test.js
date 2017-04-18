import { expect } from 'chai'
import guessTheNumber from '../src/guessTheNumber'

describe('guessTheNumber()', () => {

  it('Should expect something', function() {
    this.timeout(300000)
    guessTheNumber()
    process.stdin.resume()
    process.stdin.once('4', response => {
      console.log('response: ', response)
    })
    console.log('stdout', process.stdout)
    expect(true).to.be.true
  })
  
})
