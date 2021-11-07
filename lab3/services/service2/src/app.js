const express = require('express')
const producer = require('./producer/index')

const app = express()

let status = 'ok'

const sleep = async (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

app.get('/api/service2/untested-request', async (req, res, next) => {
    status = 'failed'
    res.status(200).send('Service successfully broken').end()
})

app.get('/api/service2', async (req, res, next) => {
    if (status != "ok") {
        await sleep(10 * 1000)
    }
    res.status(200).send('Hello from second node server').end()
})

app.post('/api/service2/message', async (req, res, next) => {
    const notificationMessage = req.body.notificationMessage
    const mobileMessage = req.body.mobileMessage

    try {
        producer.produce('notification', null, Buffer.from(notificationMessage), 'Stormwind', Date.now());
        producer.produce('mobile', null, Buffer.from(mobileMessage), 'Stormwind', Date.now());
    } catch (err) {
        console.error('A problem occurred when sending our message');
        console.error(err);
    }

    res.status(200).send('Message send').end()
})

module.exports = app
