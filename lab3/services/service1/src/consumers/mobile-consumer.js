const Kafka = require('node-rdkafka');
const mobileService = require('../services/mobile-service')

const mobileConsumer = new Kafka.KafkaConsumer({
  'group.id': 'kafka',
  'metadata.broker.list': `${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`
}, {});

mobileConsumer.connect();

mobileConsumer.on('ready', () => {
  console.log('mobile consumer ready...')
  mobileConsumer.subscribe(['mobile']);
  mobileConsumer.consume();
}).on('data', function(data) {
  console.log(`received message: ${Buffer.from(data.value)}`);

  mobileService.createRecord(messageBody)
    .catch(err => console.error("Error while creating mobile record", { err }));
  
});

module.exports = mobileConsumer