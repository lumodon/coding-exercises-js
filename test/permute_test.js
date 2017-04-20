import { expect } from 'chai'
import permute from '../src/permute'

describe('permute()', () => {
  it('Should return with an array containing all permutations of a word.', () => {
    const permuteResult = permute('bar')
    expect(permuteResult).to.contain('bar')
    expect(permuteResult).to.contain('bra')
    expect(permuteResult).to.contain('abr')
    expect(permuteResult).to.contain('arb')
    expect(permuteResult).to.contain('rba')
    expect(permuteResult).to.contain('rab')
  })

  it('Should return an array with a length of the factorial of the number of letters in passed in word', () => {
    expect(permute('aurora').length).to.equal(720)
  })
})
