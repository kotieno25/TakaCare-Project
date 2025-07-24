const twilio = require("twilio");

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

async function sendSMS(to, message) {
  return client.messages.create({
    body: message,
    from: process.env.TWILIO_PHONE,
    to,
  });
}

module.exports = sendSMS;

const sendSMS = require("../utils/sms");

// After saving to DB
await sendSMS(
  "+2547XXXXXXX", 
  `Hi ${user.name}, your pickup request has been received. We’ll notify you when the collector is on the way!`
);
