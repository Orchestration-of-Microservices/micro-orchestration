const express = require('express')
const httpClientHelper = require('./shared/httpClientHelper')

const app = express()

app.get('/api/root-service', async (req, res, next) => {

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
