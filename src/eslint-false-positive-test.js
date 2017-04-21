function lintError() {
  console.log("ESLINT says: Don't ever use double quotes")
  console.log('This is because ESLint outputs blank if there\'s no errors')
  console.log('This way, you see some errors, and know it\'s not just breaking')
}

lintError()