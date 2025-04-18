const mailServiceRouter = require('express').Router()
const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

mailServiceRouter.post("/emailAdminNewRequest", async (req, res) => {
  const { email, lastName, firstName, whyStatement} = req.body;
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["kaiac.walters@gmail.com"],
    subject: "A new user has requested access to BWF ✔",
    html:  `<div><strong>Email:</strong><span> ${email}</span><br><strong>First Name:</strong><span> ${firstName}</span><br><strong>Last Name:</strong><span> ${lastName}</span><br><strong>Why they want to join:</strong><span> ${whyStatement}</span><br><button href="#">Create new member</button><button href="#">Reject request</button></div>`
  });

  if (error) {
    return res.status(400).json({ error });
  }

  console.log("Email sent successfully:", data);
  res.status(200).json({ data });
});

module.exports = mailServiceRouter
