import { expect } from 'chai'
import gate from '../src/gate'

describe('gate()', () => {
  it('Should print the output given in example of exercises', () => {
    const input = [
      'remoteClicked',
      'cycleComplete',
      'remoteClicked',
      'remoteClicked',
      'remoteClicked',
      'remoteClicked',
      'remoteClicked',
      'cycleComplete'
    ]

    const gateReturnValues = gate(input)
    console.log(gateReturnValues)

    expect(gateReturnValues[0]).to.equal('Gate: CLOSED')
    expect(gateReturnValues[1]).to.equal('Remote clicked.')
    expect(gateReturnValues[2]).to.equal('Gate: OPENING')
    expect(gateReturnValues[3]).to.equal('Cycle Complete.')
    expect(gateReturnValues[4]).to.equal('Gate: OPEN')
    expect(gateReturnValues[5]).to.equal('Remote clicked.')
    expect(gateReturnValues[6]).to.equal('Gate: CLOSING')
    expect(gateReturnValues[7]).to.equal('Remote clicked.')
    expect(gateReturnValues[8]).to.equal('Gate: STOPPED_WHILE_CLOSING')
    expect(gateReturnValues[9]).to.equal('Remote clicked.')
    expect(gateReturnValues[10]).to.equal('Gate: OPENING')
    expect(gateReturnValues[11]).to.equal('Remote clicked.')
    expect(gateReturnValues[12]).to.equal('Gate: STOPPED_WHILE_OPENING')
    expect(gateReturnValues[13]).to.equal('Remote clicked.')
    expect(gateReturnValues[14]).to.equal('Gate: CLOSING')
    expect(gateReturnValues[15]).to.equal('Cycle Complete.')
    expect(gateReturnValues[16]).to.equal('Gate: CLOSED')
  })
})