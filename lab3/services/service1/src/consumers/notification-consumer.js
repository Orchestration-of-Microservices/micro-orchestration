const Kafka = require('node-rdkafka');
const mailer = require('../mailer')
const notificationService = require('../services/notification-service')

const notifiactionConsumer = new Kafka.KafkaConsumer({ 'group.id': 'kafka', 'metadata.broker.list': 'localhost:9092' }, {});
notifiactionConsumer.connect();

notifiactionConsumer.on('ready', () => {
  console.log('notification consumer ready...')
  notifiactionConsumer.subscribe(['notification']);
  notifiactionConsumer.consume();
}).on('data', function(data) {
  console.log(`received message: ${Buffer.from(data.value)}`);

  const messageBody = JSON.parse(data.value.toString());

  notificationService.createRecord(messageBody)
    .catch(err => console.error("Error while creating notification record", { err }));

  mailer.sendText(messageBody.to, messageBody.message, messageBody.message)
    .then(response => console.log("Mail sent", { response }))
    .catch(err => console.error("Error while sending mail", { err }));

});

module.exports = notifiactionConsumer