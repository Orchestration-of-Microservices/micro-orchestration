const { Kafka } = require('kafkajs')
 
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [`${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`]
})
 
const producer = kafka.producer();

(async () => {
    try {
        await producer.connect();
    } catch(error) {
        console.log(error)
    }
})()

module.exports = producer