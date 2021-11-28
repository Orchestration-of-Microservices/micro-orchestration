const { Kafka } = require('kafkajs')
const storageService = require('../services/storage.service')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [`172.17.0.2:31092`]
})

const secretsConsumer = kafka.consumer({"groupId": "secrets-group"})

const run = async () => {
  console.log('connecting secrets consumer...')

  await secretsConsumer.connect()
  await secretsConsumer.subscribe({ "topic": "secrets", "fromBeginning": true })

  await secretsConsumer.run({
    eachMessage: async ({ topic, partition, message }) => {

      const messageBody = JSON.parse(message.value.toString());

      console.log('Secrets consumer message', {messageBody})

      storageService.storeVariablesInMemory(messageBody)

    },
  })

}

run().catch(console.error)
