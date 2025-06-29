import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { to, subject, text, from } = await request.json();

    // For now, we'll use a simple approach that logs the email
    // In production, you'd want to use a proper email service like SendGrid, Mailgun, etc.
    
    console.log('📧 Email would be sent:');
    console.log('To:', to);
    console.log('Subject:', subject);
    console.log('From:', from);
    console.log('Body:', text);

    // For immediate testing, let's use a simple email service
    // You can replace this with your preferred email service
    
    // Option 1: Use EmailJS (free tier available)
    // Option 2: Use SendGrid (free tier available)
    // Option 3: Use Mailgun (free tier available)
    
    // For now, we'll simulate success and log the data
    // This ensures the form works while you set up your preferred email service
    
    return NextResponse.json({ 
      success: true, 
      message: 'Email logged successfully. Set up your preferred email service for actual delivery.' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    );
  }
} 