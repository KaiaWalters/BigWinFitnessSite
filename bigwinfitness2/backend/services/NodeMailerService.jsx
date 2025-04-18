import nodemailer from "nodemailer";

console.log("Inside NodeMailerService");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "thrivntech@gmail.com",
    pass: "positivevibesonly123", // generated ethereal password
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main({email, password, name}) {  
  console.log("Transport object","email", email);
  const info = await transporter.sendMail({
    from: '"BigWinFitness" <thrivntech@gmail.com>', // sender address
    to: "kaiac.walters@.com", // list of receivers
    subject: "A new user has reqnuested access to BWF ✔", // Subject line
    text: "should contain a user's email password and name", // plain text body
    html: `<b>Here is the new user's information: Name: ${name} </br> Email: ${email} </br> Password ${password}</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

export default main;