const fs = require('fs')

module.exports = function client (cli) {

  const [ destination, file ] = cli.input

  if (!destination || !file) return cli.showHelp()
  if (!fs.existsSync(file)) throw new Error('File or directory does not exist')


}
