import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      console.error('Missing fields:', { name, email, message });
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Log environment variables (not the password)
    console.log('GMAIL_USER:', process.env.GMAIL_USER);
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.error('Missing Gmail credentials in environment variables');
      return NextResponse.json({ error: 'Server email configuration error' }, { status: 500 });
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
      return NextResponse.json({ error: 'Failed to set up email transporter' }, { status: 500 });
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
      return NextResponse.json({ success: true });
    } catch (err) {
      console.error('Failed to send email:', err);
      return NextResponse.json({ error: 'Failed to send email', details: String(err) }, { status: 500 });
    }
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Failed to process request', details: String(error) }, { status: 500 });
  }
} 