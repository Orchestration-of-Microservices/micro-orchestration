const express = require('express')

const app = express()

app.get('/api/service1', async (req, res, next) => {
    res.status(200).send('Hello from first node server').end()
})

module.exports = app
