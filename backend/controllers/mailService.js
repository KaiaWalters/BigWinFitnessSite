const mailServiceRouter = require('express').Router()
const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

mailServiceRouter.post("/emailAdminNewRequest", async (req, res) => {

  const {firstName, lastName, email, whyStatement} = req.body;

  if (!firstName || !lastName || !email || !whyStatement) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ['kaiac.walters@gmail.com'],
    subject: "A new user has requested access to BWF ✔",
    html:  `<div>
    <strong>Email:</strong><span> ${email}</span><br>
    <strong>First Name:</strong><span> ${firstName}</span><br>
    <strong>Last Name:</strong><span> ${lastName}</span><br>
    <strong>Why they want to join:</strong><span> ${whyStatement}</span><br>
    <a href="http://localhost:5173/admin/signin" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Create new member</a>
    <a href="#" style="display: inline-block; padding: 10px 20px; background-color: #dc3545; color: white; text-decoration: none; border-radius: 5px; font-weight: bold; margin-left: 10px;">Reject request</a>
  </div>`
  });

  if (error) {
    return res.status(400).json({ error });
  }

  console.log("Email sent successfully:", data);
  res.status(200).json({ data });
});

module.exports = mailServiceRouter
