const { Kafka } = require('kafkajs')
 
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [`172.17.0.2:31092`]
})
 
const run = async () => {
    const producer = kafka.producer();
    const admin = kafka.admin()

    await producer.connect();
    await admin.connect()

    admin.createTopics({
        waitForLeaders: true,
        topics: [{ topic: 'notification' }],
    })

    admin.createTopics({
        waitForLeaders: true,
        topics: [{ topic: 'mobile' }],
    })
}

run().catch(console.error)


module.exports = producer