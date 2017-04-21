import { expect } from 'chai'
import permute from '../src/permute'

describe('permute()', () => {
  it('Should return every permutation of \'bar\'', () => {
    const permuteResult = permute('bar')

    expect(permuteResult).to.contain('bar')
    expect(permuteResult).to.contain('bra')
    expect(permuteResult).to.contain('abr')
    expect(permuteResult).to.contain('arb')
    expect(permuteResult).to.contain('rab')
    expect(permuteResult).to.contain('rba')
  })
})