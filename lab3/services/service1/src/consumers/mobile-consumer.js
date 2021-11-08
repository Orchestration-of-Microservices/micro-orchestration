const { Kafka } = require('kafkajs')
const mobileService = require('../services/mobile-service')
 
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [`${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`]
})

const mobileConsumer = kafka.consumer({"groupId": "test"})

const run = async () => {

  await mobileConsumer.connect()
  await mobileConsumer.subscribe({ "topic": "mobile", "fromBeginning": true })

  await mobileConsumer.run({
    eachMessage: async ({ topic, partition, message }) => {

      const messageBody = JSON.parse(message.value.toString());

      console.log({messageBody})

      mobileService.createRecord(messageBody)
        .catch(err => console.error("Error while creating mobile record", { err }));

    },
  })

}

run().catch(console.error)
