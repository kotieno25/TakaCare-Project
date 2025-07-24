// backend/utils/mailer.js
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function sendConfirmationEmail(to, subject, text) {
  const mailOptions = {
    from: `"TakaCare" <${process.env.MAIL_USER}>`,
    to,
    subject,
    text,
  };

  return transporter.sendMail(mailOptions);
}

module.exports = sendConfirmationEmail;
