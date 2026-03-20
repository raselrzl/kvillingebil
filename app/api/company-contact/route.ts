import nodemailer from "nodemailer";

interface CompanyContactData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  customerType: string;
  country: string;
  message: string;
  consent: boolean;
}

export async function POST(req: Request) {
  try {
    const data: CompanyContactData = await req.json();

    // ✅ Validation
    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.phone ||
      !data.customerType ||
      !data.country ||
      !data.message
    ) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    if (!data.consent) {
      return new Response(
        JSON.stringify({ message: "Consent required" }),
        { status: 400 }
      );
    }

    // ✅ Create transporter (Hostinger)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ✅ Email to YOU (admin)
    const adminMail = {
      from: `"Corporate Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: data.email,
      subject: `New Corporate Inquiry (${data.customerType})`,
      html: `
        <h2>New Corporate Contact Request</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Customer Type:</strong> ${data.customerType}</p>
        <p><strong>Country:</strong> ${data.country}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    };

    // ✅ Auto-reply to user
    const userMail = {
      from: `"Support Team" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: "We received your inquiry",
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Hi ${data.firstName},</p>
        <p>We have received your request regarding <strong>${data.customerType}</strong>.</p>
        <p>Our team will get back to you shortly.</p>
        <br/>
        <p><strong>Your message:</strong></p>
        <p>${data.message}</p>
        <br/>
        <p>Best regards,<br/>Support Team</p>
      `,
    };

    // ✅ Send emails
    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    return new Response(
      JSON.stringify({ message: "Corporate message sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Corporate email error:", error);

    return new Response(
      JSON.stringify({ message: "Failed to send corporate message" }),
      { status: 500 }
    );
  }
}