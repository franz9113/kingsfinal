import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const sendgridApiKey = process.env.SENDGRID_API_KEY

// Ensure the API key is set
if (!sendgridApiKey) {
  console.error("SENDGRID_API_KEY is not set in the environment variables");
  process.exit(1);
}

sgMail.setApiKey(sendgridApiKey);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic input validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    const msg = {
      to: "franzsiblos34@gmail.com", // Your recipient email
      from: email, // Using the form submitter's email as the "from" address
      subject: `New contact form submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<strong>Name:</strong> ${name}<br>
             <strong>Email:</strong> ${email}<br>
             <strong>Message:</strong> ${message}`,
    };

    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("SendGrid Error:", error.response ? error.response.body : error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}