const vaultService = require('./vault.service')

class ConfigService {

  async storeVariablesInMemory() {
    global.config = {}
    global.config.app = await vaultService.getConfig('app')
    global.config.gmail = await vaultService.getConfig('gmail')
    global.config.aws = await vaultService.getConfig('aws')
    global.config.stripe = await vaultService.getConfig('stripe')
    global.config.sendgrid = await vaultService.getConfig('sendgrid')
    global.config.mongo = await vaultService.getConfig('mongo')
    global.config.network = await vaultService.getConfig('network')
    global.config.jwt = await vaultService.getConfig('jwt')
    global.config.github = await vaultService.getConfig('github')
 }
}

module.exports = new ConfigService()