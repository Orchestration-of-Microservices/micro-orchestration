const secrets = {
    "DATABASE_HOST": "172.17.0.2",
    "DATABASE_NAME": "demo",
    "DATABASE_PASSWORD": "demo",
    "DATABASE_PORT": "30031",
    "DATABASE_USER": "demo",
    "EMAIL_ACCOUNT": "tvv13",
    "EMAIL_FROM": "tvv13@rambler.ru",
    "EMAIL_PASSWORD": "8eLsh0hQMg",
    "EMAIL_PORT": "465",
    "EMAIL_SECURE": "true",
    "EMAIL_SMTP": "smtp.rambler.ru",
    "KAFKA_HOST": "172.17.0.2",
    "KAFKA_PORT": "31092",
    "NODE_ENV": "development",
    "SUPPORT_EMAIL": "tvv13@rambler.ru",
    "TWILIO_API_KEY": "",
    "TWILIO_API_SID": "",
    "TWILIO_FROM": ""
}

Object.keys(secrets).map(secretKey => {
    global[secretKey] = secrets[secretKey]
}) 

console.log({global})
