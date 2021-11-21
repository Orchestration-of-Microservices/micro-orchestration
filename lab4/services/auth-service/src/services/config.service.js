const vaultService = require('./vault.service')
const producer = require('../producer/index')

class ConfigService {

  async shareSecrets() {
    const secrets = await vaultService.getConfig()
    console.log({secrets})

    await producer.send({
        topic: 'secrets',
        messages: [{
            "value": Buffer.from(JSON.stringify(secrets)),
            "partition": 0
        }],
    })

  }

}

module.exports = new ConfigService()