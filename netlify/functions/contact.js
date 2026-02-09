const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    const { name, email, phone, query } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !phone || !query) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'All fields are required'
        })
      };
    }

    // Remove spaces from app password (in case it was copy-pasted with spaces)
    const appPassword = (process.env.GMAIL_APP_PASSWORD || '').replace(/\s/g, '');

    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: appPassword
      }
    });

    // Email options
    const mailOptions = {
      from: `"Yahvi Aura Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #fe00dd 0%, #a80fd2 100%); padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #fe00dd; margin-top: 0; font-size: 18px; border-bottom: 2px solid #fe00dd; padding-bottom: 10px;">Contact Details</h2>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #666; display: inline-block; width: 100px;">Name:</strong>
                <span style="color: #333;">${name}</span>
              </div>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #666; display: inline-block; width: 100px;">Email:</strong>
                <a href="mailto:${email}" style="color: #fe00dd; text-decoration: none;">${email}</a>
              </div>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #666; display: inline-block; width: 100px;">Phone:</strong>
                <a href="tel:${phone}" style="color: #fe00dd; text-decoration: none;">${phone}</a>
              </div>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px;">
              <h2 style="color: #fe00dd; margin-top: 0; font-size: 18px; border-bottom: 2px solid #fe00dd; padding-bottom: 10px;">Message</h2>
              <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${query}</p>
            </div>
          </div>
          
          <div style="background: #333; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px;">
            <p style="margin: 0;">This email was sent from the Yahvi Aura Events contact form</p>
            <p style="margin: 5px 0 0 0; color: #aaa;">
              Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${query}

---
Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log('✓ Email sent successfully to:', process.env.GMAIL_USER);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Email sent successfully'
      })
    };
  } catch (error) {
    console.error('✗ Error sending email:', error.message);
    console.error('Full error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: `Failed to send email: ${error.message}`
      })
    };
  }
};
