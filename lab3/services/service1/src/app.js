require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser');

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

module.exports = app
