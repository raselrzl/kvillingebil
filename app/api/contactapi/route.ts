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
    if (!data.name || !data.email || !data.subject || !data.message) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 },
      );
    }

    // Captcha check (server side)
    if (data.captcha !== "5") {
      return new Response(JSON.stringify({ message: "Invalid captcha" }), {
        status: 400,
      });
    }

    if (!data.consent) {
      return new Response(JSON.stringify({ message: "Consent required" }), {
        status: 400,
      });
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
      from: `"Kvillinge Bil" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: "Thank You for Contacting Kvillinge Bil",
      html: `
    <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; padding:25px; border-radius:10px; background:#ffffff; color:#333;">
      <h2 style="color:#2db1cc; text-align:center; font-size:28px; margin-bottom:15px;">Thank You for Contacting Kvillinge Bil!</h2>

      <p style="font-size:16px; line-height:1.6;">
        Hi ${data.name},<br/><br/>
        We have received your message. At <strong>Kvillinge Bil AB</strong>, your inquiry is important to us. 
        Our team responds based on priority to ensure you receive the attention you deserve.
      </p>

      <p style="font-size:16px; line-height:1.6; margin-top:10px;">
        We will review your message carefully and respond as soon as possible. Meanwhile, you can explore our website for more information about our services.
      </p>

      <p style="font-size:16px; line-height:1.6; margin-top:20px; padding:10px; background:#f9f9f9; border:1px solid #ddd; border-radius:4px; white-space: pre-wrap; word-wrap: break-word;">
        <strong>Your message:</strong><br/>
        ${data.message}
      </p>

      <div style="text-align:center; margin:25px 0;">
        <a href="https://www.kvillingebil.se" target="_blank" style="background: linear-gradient(90deg, #2db1cc, #249bb3); color:#fff; text-decoration:none; padding:12px 25px; border-radius:6px; font-weight:bold; display:inline-block;">
          Visit Our Website
        </a>
      </div>

      <p style="font-size:14px; color:#555; text-align:center; margin-top:15px;">
        This is an automated response. Please do not reply directly to this email.
      </p>

      <p style="font-size:14px; color:#888; text-align:center; margin-top:25px;">
        Best regards,<br/>
        Kvillinge Bil AB
      </p>

      <div style="text-align:center; margin-top:25px;">
        <img src="./public/logoblack.jpeg" alt="Kvillinge Bil Logo" style="height:50px;" />
      </div>
    </div>
  `,
    };

    // Send both emails
    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Email error:", error);

    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
    });
  }
}
