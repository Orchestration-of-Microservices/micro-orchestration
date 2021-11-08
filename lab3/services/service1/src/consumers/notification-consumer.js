const { Kafka } = require('kafkajs')
const mailer = require('../mailer')
const notificationService = require('../services/notification-service')
 
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [`172.17.0.2:31092`]
})

const notifiactionConsumer = kafka.consumer({"groupId": "notification-group"})

const run = async () => {
  console.log('connecting notification consumer...')

  await notifiactionConsumer.connect()
  await notifiactionConsumer.subscribe({ "topic": "notification", "fromBeginning": true })

  await notifiactionConsumer.run({
    eachMessage: async ({ topic, partition, message }) => {

      const messageBody = JSON.parse(message.value.toString());

      console.log({messageBody})

      const subject = `Notification service`
      const testMessage = `Dear user, you have received new message: ${messageBody.message}`

      notificationService.createRecord(messageBody)
        .catch(err => console.error("Error while creating notification record", { err }));
  
      mailer.sendText(messageBody.to, subject, testMessage)
        .then(response => console.log("Mail sent", { response }))
        .catch(err => console.error("Error while sending mail", { err }));

    },
  })

}

run().catch(console.error)
