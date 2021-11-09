const twilio = require('twilio');

const twilioService = (options = { twilioApiSid, twilioApiKey, twilioFrom }) => {
  const client = twilio(options.twilioApiSid, options.twilioApiKey);

  const sendSms = async (phoneNumber, message) => {
    await client.messages.create({
      from: options.twilioFrom,
      to: phoneNumber,
      body: message
    }).catch(err => {
      throw err;
    });
  }

  return Object.freeze({ sendSms });
}

module.exports = twilioService({
  twilioApiSid: process.env.TWILIO_API_SID,
  twilioApiKey: process.env.TWILIO_API_KEY,
  twilioFrom: process.env.TWILIO_FROM
});
