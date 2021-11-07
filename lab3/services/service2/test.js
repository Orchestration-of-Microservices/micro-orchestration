const notificationMessage = {
    to: 'user@user.com',
    message: 'hello'
}
const mobileMessage = {
    to: '+380123456789',
    message: 'hello'
}


const data = Buffer.from(JSON.stringify(notificationMessage))

console.log({data})
console.log(`received message: ${Buffer.from(data)}`);

const message = Buffer.from(data)
console.log({message})
console.log({to: message.to})
const messageBody = JSON.parse(data.toString());

console.log({messageBody})
console.log({to: messageBody.to})

