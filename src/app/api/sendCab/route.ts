import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, destination, notes } = await req.json();

    if (!name || !email || !phone) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
     auth: {
        user: "bluemoonconstruction4u@gmail.com", // set in .env
        pass: "swohrpuloqzysmjc", // set in .env
      },
    });

    await transporter.sendMail({
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
    });

    return NextResponse.json({ message: "Cab request sent successfully" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Failed to send cab request" }, { status: 500 });
  }
}
