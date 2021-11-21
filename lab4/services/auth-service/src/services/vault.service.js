const enginename = process.env.ENGINENAME || 'impltechteam'
const hvpath = process.env.HVPATH || 'raccoon'
const profile = process.env.PROFILE || 'docker-image-test-v2'
const token = process.env.TOKEN || '7177f6df-b7b7-9108-a34f-0abd5a8ee1c6'
const endpoint = process.env.ENDPOINT || 'http://134.122.69.19:8200/'

const options = { apiVersion: 'v1', endpoint, token };

const vault = require("node-vault")(options);

class VaultService {
    async getConfig(service, token) {
       const info = await vault.read(`${enginename}/data/${hvpath}/${service}/${profile}`)
       return info.data.data
    }

    async getToken(service, token) {
        const info = await vault.read(`${enginename}/data/${hvpath}/${service}/${profile}`)
        return info.data.data
     }
}

module.exports = new VaultService()
