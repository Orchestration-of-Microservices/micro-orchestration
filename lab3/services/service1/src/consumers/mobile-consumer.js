const { Kafka } = require('kafkajs')
const mobileService = require('../services/mobile-service')
const twilioService = require('../sms')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [`172.17.0.2:31092`]
})

const mobileConsumer = kafka.consumer({"groupId": "mobile-group"})

const run = async () => {
  console.log('connecting mobile consumer...')

  await mobileConsumer.connect()
  await mobileConsumer.subscribe({ "topic": "mobile", "fromBeginning": true })

  await mobileConsumer.run({
    eachMessage: async ({ topic, partition, message }) => {

      const messageBody = JSON.parse(message.value.toString());

      console.log({messageBody})

      mobileService.createRecord(messageBody)
        .catch(err => console.error("Error while creating mobile record", { err }));

      twilioService.sendSms('+380666751205', 'hello world from twilio')
        .then(response => console.log("Sms was sent", { response }))
        .catch(err => console.error("Error while sending sms", { err }));
    },
  })

}

run().catch(console.error)
