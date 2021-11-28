require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser');

const mailer = require('./mailer')

const app = express()

require('./utilities/migrations');
require('./models');

require('./consumers/mobile-consumer')
require('./consumers/notification-consumer')

app.use(bodyParser.urlencoded({ extended: true, strict: false }));
app.use(bodyParser.json());

app.get('/api/service1', async (req, res, next) => {
    res.status(200).send('Hello from first node server').end()
})

app.post('/api/sendMail', async (req, res, next) => {
    try {
        await mailer.sendText('rv.volovik88@gmail.com', 'subject', 'testMessage')
    } catch(error) {
        console.error("Error while sending mail", { err })
    }

    console.log("Mail sent", { response })

    res.status(200).send('Mail sent').end()
})

module.exports = app
