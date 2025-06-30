const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');

// Transport configuration with SendGrid
const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.API_SENDGRID_URL, // Make sure this is correct
    },
  }),
);

// Controller to handle email sending
const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // Validation
    if (!name || !email || !msg) {
      return res.status(400).send({
        success: false,
        message: 'Please provide all fields (name, email, message)',
      });
    }

    // Email configuration
    const info = await transporter.sendMail({
      to: 'muhammadshakeelafd@gmail.com', // Your receiving address
      from: 'no-reply@shakeelportfolio.com', 
      replyTo: email, // So you can reply directly to the sender
      subject: 'New Message from Portfolio Contact Form',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${msg}
      `,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${msg}</p>
      `,
    });

    console.log('Email Sent:', info);

    return res.status(200).send({
      success: true,
      message: 'Your message was sent successfully!',
      info,
    });
  } catch (error) {
    console.error('Email Send Error:', error);
    return res.status(500).send({
      success: false,
      message: 'Failed to send message. Please try again later.',
      error: error.message || error,
    });
  }
};

module.exports = { sendEmailController };
