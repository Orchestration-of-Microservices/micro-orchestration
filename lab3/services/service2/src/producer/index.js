const Kafka = require('node-rdkafka');

const producer = new Kafka.Producer({
    'metadata.broker.list': `${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`,
    'dr_cb': true
});

producer.connect();

producer.on('ready', function() {
    console.log('Kafra producer ready to produce messages...')
});

producer.on('event.error', function(err) {
    console.error('Error from producer');
    console.error(err);
})

producer.setPollInterval(100);

module.exports = producer