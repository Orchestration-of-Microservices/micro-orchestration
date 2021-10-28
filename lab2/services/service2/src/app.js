const express = require('express')

const app = express()

app.get('/api/service2', async (req, res, next) => {
    res.status(200).send('Hello from second node server').end()
})

module.exports = app


