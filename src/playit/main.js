'use strict'

const BPM = 120 // Standard for classical music according to here: https://music.stackexchange.com/questions/4525/list-of-average-genre-tempo-bpm-levels
const beatsPerMinuteToMillisecondsPerBeat = (bpm, notesPerMeasure) => ((bpm/60)*(1000/notesPerMeasure))

document.addEventListener('DOMContentLoaded', () => {
  let interval
  let pianoScale = {
    'startNote': 'C',
    'notesPerMeasure': 8,
    'C': [261.6, 'D'],
    'D': [293.7, 'E'],
    'E': [329.6, 'F'],
    'F': [349.2, 'G'],
    'G': [392.0, 'A'],
    'A': [440.0, 'B'],
    'B': [493.9, 'C']
  }
  let guitarScale = {
    'startNote': 'big-E',
    'notesPerMeasure': 6,
    'big-E': [82.41, 'A'],
    'A'    : [110.0, 'D'],
    'D'    : [146.83, 'G'],
    'G'    : [196.00, 'B'],
    'B'    : [246.94, 'lil-e'],
    'lil-e': [329.63, 'big-E']
  }
  let chosenScale = pianoScale
  let currentNote = chosenScale.startNote
  let oscillator

  document.getElementById('start').addEventListener('click', () => {
    const audioNode = new AudioContext()
    oscillator = audioNode.createOscillator()
    oscillator.connect(audioNode.destination)
    oscillator.start()
    interval = setInterval(() => {
      oscillator.frequency.value = chosenScale[currentNote][0]
      currentNote = chosenScale[currentNote][1]
    }, beatsPerMinuteToMillisecondsPerBeat(BPM, chosenScale.notesPerMeasure))
  })
  document.getElementById('stop').addEventListener('click', () => {
    oscillator.stop()
    clearInterval(interval)
  })
  document.getElementById('piano').addEventListener('click', () => {
    chosenScale = pianoScale
  })
  document.getElementById('guitar').addEventListener('click', () => {
    chosenScale = guitarScale
  })
})