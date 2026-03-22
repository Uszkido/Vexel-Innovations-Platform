import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        // Simulate database or email logic
        console.log("Contact Request Received:", { name, email, subject, message });

        // In a real production environment, you'd use something like Resend or Nodemailer
        // const res = await resend.emails.send({ ... });

        return NextResponse.json({ message: "Request received" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
    }
}
