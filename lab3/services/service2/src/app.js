require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser');
const producer = require('./producer/index')

const app = express()

app.use(bodyParser.urlencoded({ extended: true, strict: false }));
app.use(bodyParser.json());

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

    console.log('body:', req.body)

    const notificationMessage = req.body.notification
    const mobileMessage = req.body.mobile

    const partition = notificationMessage[0] < "N" ? 0 : 1;

    try {
        await producer.send({
            topic: 'notification',
            messages: [{
                "value": Buffer.from(JSON.stringify(notificationMessage)),
                "partition": partition
            }],
        })

        await producer.send({
            topic: 'mobile',
            messages: [{
                "value": Buffer.from(JSON.stringify(mobileMessage)),
                "partition": partition
            }],
        })
    } catch (err) {
        console.error('A problem occurred when sending our message');
        console.error(err);
    }

    res.status(200).send('Message send').end()
})

module.exports = app
