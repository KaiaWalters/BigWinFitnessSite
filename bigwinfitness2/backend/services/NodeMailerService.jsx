const nodemailer = require("nodemailer");


console.log(process.env.OUTLOOK_USER)

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false, 
  auth: {
    user: process.env.OUTLOOK_USER, 
    pass: process.env.OUTLOOK_APP_PASSWORD,
  },
  tls: {
    ciphers: 'SSLv3',
  },
});

async function main({ email, name }) {
  try {
    const info = await transporter.sendMail({
      from: '"BigWinFitness" <your-email@outlook.com>',
      to: "kaiac.walters@gmail.com",
      subject: "A new user has requested access to BWF ✔",
      html: `
        <b>New User Info</b><br/>
        Name: ${name}<br/>
        Email: ${email}<br/>
  
      `,
    });

    console.log("✅ Message sent:", info.messageId);
  } catch (err) {
    console.error("❌ Failed to send email:", err);
  }
}

module.exports = main;
