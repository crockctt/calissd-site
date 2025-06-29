import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { to, subject, html } = await request.json();

    // For now, we'll use a simple approach that logs the email
    // In production, you can easily switch to SendGrid, Mailgun, or another service
    console.log('📧 Email would be sent:');
    console.log('To:', to);
    console.log('Subject:', subject);
    console.log('HTML:', html);

    // Simulate email sending success
    // Replace this with your preferred email service
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    );
  }
} 