const Menu = require('terminal-menu')
const menu = Menu({ width: 29, x: 4, y: 2 })
const cp = require('child_process')
const sys = require('sys')

menu.reset()
menu.write('CODING EXERCISES\n')
menu.write('----------------\n')
 
menu.add('GUESS NUMBER')
menu.add('EXIT')
 
menu.on('select', function (label) {
  menu.close()
  console.log('\nSELECTED: ' + label + '\n')
  if(label !== 'EXIT') {
    const selection = {
      'GUESS NUMBER': 'src/guessTheNumber.js'
    }[label]

    console.log('Spawning child process')

    


    // program.stdout.on('data', data => {
    //   console.log(`stdout: ${data}`)
    // })

    // program.on('close', data => {
    //   console.log(`program closed with: ${data}`)
    // })

    // program.on('error', err => {
    //   console.log('Failed to start child process.\nerr:', err)
    // })
  }
})

process.stdin.pipe(menu.createStream()).pipe(process.stdout)
 
process.stdin.setRawMode(true)
menu.on('close', () => {
  process.stdin.setRawMode(false)
  process.stdin.end()
})

console.log('everything piped')