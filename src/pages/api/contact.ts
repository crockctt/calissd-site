import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      console.error('Missing fields:', { name, email, message });
      return res.status(400).json({ error: 'Missing fields' });
    }

    // Log environment variables (not the password)
    console.log('GMAIL_USER:', process.env.GMAIL_USER);
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.error('Missing Gmail credentials in environment variables');
      return res.status(500).json({ error: 'Server email configuration error' });
    }

    // Create transporter
    let transporter;
    try {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });
      console.log('Transporter created');
    } catch (err) {
      console.error('Failed to create transporter:', err);
      return res.status(500).json({ error: 'Failed to set up email transporter' });
    }

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email,
    };

    // Send email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
      return res.status(200).json({ success: true });
    } catch (err) {
      console.error('Failed to send email:', err);
      return res.status(500).json({ error: 'Failed to send email', details: String(err) });
    }
  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({ error: 'Failed to process request', details: String(error) });
  }
} 