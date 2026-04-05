import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
  captcha: string; 
}

export async function POST(req: Request) {
  try {
    const data: ContactFormData = await req.json();

    // Validation
    if (
      !data.name ||
      !data.email ||
      !data.subject ||
      !data.message
    ) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Captcha check (server side)
    if (data.captcha !== "5") {
      return new Response(
        JSON.stringify({ message: "Invalid captcha" }),
        { status: 400 }
      );
    }

    if (!data.consent) {
      return new Response(
        JSON.stringify({ message: "Consent required" }),
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Admin email (you receive)
    const adminMail = {
      from: `"Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: data.email,
      subject: `New Message: ${data.subject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    };

    // Auto-reply email (user receives)
    const userMail = {
      from: `"Support" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: "We received your message",
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Hi ${data.name},</p>
        <p>We have received your message and will get back to you soon.</p>
        <br/>
        <p><strong>Your message:</strong></p>
        <p>${data.message}</p>
        <br/>
        <p>Best regards,<br/>Support Team</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);

    return new Response(
      JSON.stringify({ message: "Failed to send email" }),
      { status: 500 }
    );
  }
}