const enginename = process.env.ENGINENAME || 'secret'
const hvpath = process.env.HVPATH || 'webapp'
const token = process.env.TOKEN || 's.iKZxgScRpraU8lGfCh04PHOU'
const endpoint = process.env.ENDPOINT || 'http://localhost:8200'

const options = { apiVersion: 'v1', endpoint, token };

const vault = require("node-vault")(options);

class VaultService {
    async getConfig() {
      const info = await vault.read(`${enginename}/data/${hvpath}/config`)
      return info.data.data
    }

}

module.exports = new VaultService()
