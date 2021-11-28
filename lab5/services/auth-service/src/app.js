const express = require('express')
const configService = require('./services/config.service')
const vaultService = require('./services/vault.service')

const app = express()

app.post('/api/auth-service/share', async (req, res, next) => {
    try {
        await configService.shareSecrets()
    } catch (err) {
        console.error('A problem occurred when sending our message');
        console.error(err);
    }

    res.status(200).send('Secrets send').end()
})

app.get('/api/auth-service/secrets', async (req, res, next) => {
    try {
        const secrets = await vaultService.getConfig()
        res.json(secrets)
    } catch(error) {
        next(error)
    }
})

module.exports = app
