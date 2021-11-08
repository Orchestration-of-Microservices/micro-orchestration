const { Kafka } = require('kafkajs')
const mailer = require('../mailer')
const notificationService = require('../services/notification-service')
 
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [`172.17.0.2:31092`]
})

const notifiactionConsumer = kafka.consumer({"groupId": "test"})

const run = async () => {

  await notifiactionConsumer.connect()
  await notifiactionConsumer.subscribe({ "topic": "notification", "fromBeginning": true })

  await notifiactionConsumer.run({
    eachMessage: async ({ topic, partition, message }) => {

      const messageBody = JSON.parse(message.value.toString());

      console.log({messageBody})

      notificationService.createRecord(messageBody)
        .catch(err => console.error("Error while creating notification record", { err }));
  
      mailer.sendText(messageBody.to, messageBody.message, messageBody.message)
        .then(response => console.log("Mail sent", { response }))
        .catch(err => console.error("Error while sending mail", { err }));

    },
  })

}

run().catch(console.error)
