const mailServiceRouter = require('express').Router();
const { generateFromEmail, generateUsername } = require("unique-username-generator");
const { Resend } = require("resend");
const jwt = require('jsonwebtoken');
const User = require('../models/user.schema');

const resend = new Resend(process.env.RESEND_API_KEY);

mailServiceRouter.post("/emailAdminNewRequest", async (req, res) => {
  const { firstName, lastName, email, whyStatement } = req.body;

  if (!firstName || !lastName || !email || !whyStatement) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: 'This user is already registered' });
    }

    const tempUsername = generateFromEmail(email);
    const tempPassword = generateUsername();

    const newUser = {
      email,
      password: tempPassword,
      username: tempUsername,
      status: "requested",
      isAdmin: false,
    };

    const user = new User(newUser);

    const token = jwt.sign(newUser,'xxx-xxx', {
      expiresIn: '1h',
    });

    console.log('🟡 Sending email...');

    try {
      const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ['kaiac.walters@gmail.com'],
        subject: "A new user has requested access to BWF ✔",
        html: `
          <div>
            <strong>Email:</strong> ${email}<br>
            <strong>First Name:</strong> ${firstName}<br>
            <strong>Last Name:</strong> ${lastName}<br>
            <strong>Why they want to join:</strong> ${whyStatement}<br>
            <a href="http://localhost:5173/admin/signin" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Create new member</a>
            <a href="#" style="display: inline-block; padding: 10px 20px; background-color: #dc3545; color: white; text-decoration: none; border-radius: 5px; font-weight: bold; margin-left: 10px;">Reject request</a>
          </div>`,
      });

      if (error) {
        console.error("❌ Resend error:", error.message || error);
        return res.status(500).json({ message: "Email sending failed", error: error.message });
      }

      console.log('✅ Email sent');
    } catch (emailError) {
      console.error('❌ Exception during email send:', emailError.message);
      return res.status(500).json({ message: 'Exception sending email', error: emailError.message });
    }

    console.log("🟢 Attempting to save user...");

    try {
      await user.save();
      console.log('✅ User saved successfully:', user);
    } catch (saveError) {
      console.error('❌ Error saving user:', saveError);
      return res.status(500).json({ message: 'Error saving user', error: saveError.message });
    }

    console.log("🟢 Sending success response");

    return res.status(201).json({
      user,
      message: 'User registered successfully',
      token,
    });

  } catch (error) {
    console.error('❌ Outer catch:', error.message);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = mailServiceRouter;
