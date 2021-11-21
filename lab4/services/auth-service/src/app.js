const express = require('express')
const httpClientHelper = require('./shared/httpClientHelper')
const configService = require('./services/config.service')

await configService.storeVariablesInMemory()

const app = express()

app.get('/api/auth-service/token', async (req, res, next) => {

    try {
        const serverResponses = await Promise.all([
            httpClientHelper.load('http://service1-service/api/service1'),
            httpClientHelper.load('http://service2-service/api/service2')    
        ])
    
        res.json(serverResponses)
    
    } catch(error) {
        next(error)
    }

})

app.get('/api/auth-service/config', async (req, res, next) => {

    try {
        const serverResponses = await Promise.all([
            httpClientHelper.load('http://service1-service/api/service1'),
            httpClientHelper.load('http://service2-service/api/service2')    
        ])
    
        res.json(serverResponses)
    
    } catch(error) {
        next(error)
    }

})

module.exports = app
