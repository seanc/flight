const got = require('got')
const Hmmac = require('hmmac')

const hmac = new Hmmac({ scheme: Hmmac.schemes.load('plain') })

module.exports = function request (destination, config) {
  if (!config.has(`destinations.${destination.trim()}`)) {
    return throw new Error(`No key or secret found for destination ${destination}, please run 'flight auth'`)
  }

  return function (options) {

  }
}
