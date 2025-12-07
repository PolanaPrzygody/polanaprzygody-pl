import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Proszę wypełnić wszystkie wymagane pola." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Proszę podać poprawny adres email." },
        { status: 400 }
      );
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "Polana Przygody <kontakt@polanaprzygody.pl>",
      to: ["info@polanaprzygody.pl"],
      replyTo: body.email,
      subject: `Nowa wiadomość od ${body.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #2A5C47; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #2A5C47; padding: 30px; border-radius: 16px 16px 0 0; text-align: center;">
              <h1 style="color: #E8FC59; margin: 0; font-size: 24px;">Polana Przygody</h1>
              <p style="color: #BCC7A1; margin: 8px 0 0 0; font-size: 14px;">Nowa wiadomość z formularza kontaktowego</p>
            </div>
            
            <div style="background: #EFF1C5; padding: 30px; border-radius: 0 0 16px 16px;">
              <div style="background: white; padding: 24px; border-radius: 12px; margin-bottom: 20px;">
                <h2 style="margin: 0 0 20px 0; color: #2A5C47; font-size: 18px;">Dane kontaktowe</h2>
                
                <p style="margin: 0 0 12px 0;">
                  <strong style="color: #2A5C47;">Imię i nazwisko:</strong><br>
                  <span style="color: #2A5C47;">${body.name}</span>
                </p>
                
                <p style="margin: 0 0 12px 0;">
                  <strong style="color: #2A5C47;">Email:</strong><br>
                  <a href="mailto:${body.email}" style="color: #2A5C47;">${body.email}</a>
                </p>
                
                ${
                  body.phone
                    ? `
                <p style="margin: 0 0 12px 0;">
                  <strong style="color: #2A5C47;">Telefon:</strong><br>
                  <a href="tel:${body.phone}" style="color: #2A5C47;">${body.phone}</a>
                </p>
                `
                    : ""
                }
              </div>
              
              <div style="background: white; padding: 24px; border-radius: 12px;">
                <h2 style="margin: 0 0 16px 0; color: #2A5C47; font-size: 18px;">Wiadomość</h2>
                <p style="margin: 0; color: #2A5C47; white-space: pre-wrap;">${body.message}</p>
              </div>
            </div>
            
            <p style="text-align: center; color: #BCC7A1; font-size: 12px; margin-top: 20px;">
              Wiadomość wysłana z formularza na stronie polanaprzygody.pl
            </p>
          </body>
        </html>
      `,
      text: `
Nowa wiadomość z formularza kontaktowego - Polana Przygody

Dane kontaktowe:
- Imię i nazwisko: ${body.name}
- Email: ${body.email}
${body.phone ? `- Telefon: ${body.phone}` : ""}

Wiadomość:
${body.message}

---
Wiadomość wysłana z formularza na stronie polanaprzygody.pl
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Wystąpił błąd podczas wysyłania wiadomości." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Wystąpił błąd serwera. Spróbuj ponownie później." },
      { status: 500 }
    );
  }
}

