import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormRequest {
  name: string;
  email: string;
  number?: string;
  destination?: string;
  date?: string;
  message: string;
  page?: string;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, number, destination, date, message, page } =
      (await req.json()) as ContactFormRequest;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER, // from .env
        pass: process.env.EMAIL_PASS, // from .env
      },
    });

    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: "jpaholidaystravel@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Page:</strong> ${page || "-"}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${number || "-"}</p>
        <p><strong>Destination:</strong> ${destination || "-"}</p>
        <p><strong>Date:</strong> ${date || "-"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    } catch (err: any) {
      console.error("Mail sending failed:", err.message);

      // Handle Gmail rate-limit (450) errors
      if (err.responseCode === 450) {
        return NextResponse.json(
          {
            message:
              "Recipient temporarily cannot receive emails. Please try again later.",
          },
          { status: 429 }
        );
      }

      return NextResponse.json(
        { message: "Email send failed" },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error("Request parsing error:", err);
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }
}
