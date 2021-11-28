const { Kafka } = require('kafkajs')
 
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [`172.17.0.2:31092`]
})

const producer = kafka.producer();
const admin = kafka.admin();

const run = async () => {
    await producer.connect();
    await admin.connect()

    await admin.createTopics({
        "topics": [{
            "topic" : "notification",
            "numPartitions": 2
        }]
    })

    await admin.createTopics({
        "topics": [{
            "topic" : "mobile",
            "numPartitions": 2
        }]
    })

    await admin.disconnect();
}

run().catch(console.error)

module.exports = producer