import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Simple validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Wymagane pola: imię, email i wiadomość.' },
        { status: 400 }
      );
    }

    const emailSubject = subject || 'Nowa wiadomość z formularza kontaktowego MCB';

    const data = await resend.emails.send({
      from: 'Formularz Kontaktowy <onboarding@resend.dev>', // Default testing sender
      to: ['krzysztof.bojko@gmail.com'], // Updated recipient
      // Note: In free Resend tier, you can only send to the email you signed up with.
      // Ideally, this should be the user's email, but we can't send FROM them easily.
      // We reply TO them.
      replyTo: email, 
      subject: `[MCB WWW] ${emailSubject}`,
      html: `
        <h3>Nowa wiadomość od użytkownika: ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Temat:</strong> ${emailSubject}</p>
        <hr />
        <p><strong>Treść wiadomości:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Błąd wysyłania wiadomości' }, { status: 500 });
  }
}
