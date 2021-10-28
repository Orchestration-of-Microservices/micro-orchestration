const express = require('express')

const app = express()

let status = 'ok'

app.get('/api/service2/untested-request', async (req, res, next) => {
    status = 'failed'
    res.status(200).send('Service successfully broken').end()
})

app.get('/api/service2', async (req, res, next) => {
    if (status != "ok") {
        setTimeout(() => {}, 10 * 1000)
    }
    res.status(200).send('Hello from second node server').end()
})

module.exports = app


