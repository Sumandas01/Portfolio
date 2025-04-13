const { body, validationResult } = require('express-validator');
const emailService = require('../services/emailService');

// Validation middleware
const validateContactForm = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Please enter a valid email address'),
  body('subject').trim().notEmpty().withMessage('Subject is required'),
  body('message').trim().notEmpty().withMessage('Message is required')
];

// Contact form submission handler
const submitContact = async (req, res) => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { name, email, subject, message } = req.body;

    // Create HTML message
    const htmlMessage = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    // Send email
    await emailService.sendEmail(
      process.env.CONTACT_EMAIL,
      `Portfolio Contact: ${subject}`,
      htmlMessage
    );

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully!'
    });
  } catch (error) {
    console.error('Error in contact submission:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while sending your message. Please try again later.'
    });
  }
};

module.exports = {
  submitContact,
  validateContactForm
}; 