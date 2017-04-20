function gate(instructions) {
  let state = {
    nextDirection: 'OPEN',
    currentState: 'CLOSED',
    remoteWillStop: false,
    listOfOutput: ['Gate: CLOSED']
  }

  instructions.forEach( instruction => {
    if(instruction === 'remoteClicked') {
      state.listOfOutput.push('Remote clicked.')
      if(state.remoteWillStop) {
        state.remoteWillStop = false
        state.currentState = {
          "CLOSING": 'STOPPED_WHILE_CLOSING',
          "OPENING": 'STOPPED_WHILE_OPENING'
        }[state.currentState]
        state.listOfOutput.push('Gate: '+state.currentState)
        state.nextDirection = state.nextDirection === 'CLOSED' ? 'OPEN' : 'CLOSED'
      } else {
        state.remoteWillStop = true
        state.currentState = {
          "OPEN": 'OPENING',
          "CLOSED": 'CLOSING'
        }[state.nextDirection]
        state.listOfOutput.push('Gate: '+state.currentState)
      }
    } else { // cycleComplete
      state.listOfOutput.push('Cycle Complete.')
      state.currentState = state.nextDirection
      state.listOfOutput.push('Gate: '+state.currentState)
      state.nextDirection = state.nextDirection === 'CLOSED' ? 'OPEN' : 'CLOSED'
      state.remoteWillStop = false
    }
  })
  return state.listOfOutput
}

export default gate