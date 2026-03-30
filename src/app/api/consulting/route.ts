import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstName, lastName, companyName, email, phone, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Consulting Form <onboarding@resend.dev>', // Porobortite verfied domain set korun
      to: 'developer.shakil.ctg@gmail.com',
      subject: `New Consulting Request from ${firstName} ${lastName}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e1e1e1; border-radius: 10px;">
          <h2 style="color: #007bff; text-align: center;">New Consulting Submission</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>First Name:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${firstName}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Last Name:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${lastName}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Company/Org:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${companyName}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Message:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${message}</td></tr>
          </table>
          
          <p style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">Submitted from CraftedMart Agency Website</p>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' + error }, { status: 500 });
  }
}