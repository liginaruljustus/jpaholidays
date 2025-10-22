import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface CabRequest {
  name: string;
  email: string;
  phone: string;
  destination?: string;
  notes?: string;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, destination, notes } = (await req.json()) as CabRequest;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `"Cab Service Request" <${process.env.EMAIL_USER}>`,
      to: "jpaholidaystravel@gmail.com",
      subject: "New Cab Service Request",
      html: `
        <h3>New Cab Service Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Destination / Place to Visit:</strong> ${destination || "-"}</p>
        <p><strong>Notes:</strong> ${notes || "-"}</p>
      `,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: "Cab request sent successfully" }, { status: 200 });
    } catch (err: any) {
      console.error("Mail sending failed:", err.message);

      // Handle Gmail rate-limit errors
      if (err.responseCode === 450) {
        return NextResponse.json(
          { message: "Recipient temporarily cannot receive emails. Please try again later." },
          { status: 429 }
        );
      }

      return NextResponse.json({ message: "Failed to send cab request" }, { status: 500 });
    }
  } catch (err) {
    console.error("Request handling error:", err);
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }
}
