import { expect } from 'chai'
import lair from '../src/lair'

describe('lair()', () => {
  it('Should return the inverse factorial of 720', () => {
    expect(lair(720)).to.equal(6)
  })

  it('Should return the inverse factorial of 39916800', () => {
    expect(lair(39916800)).to.equal(11)
  })

  it('Should return NONE when factorializing a non-whole-number result', () => {
    expect(lair(519)).to.equal('NONE')
  })
})