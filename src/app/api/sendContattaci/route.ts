"use server"
import { EmailTemplate } from '../../../components/emailTemplates/contattaciTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_KEY);



export async function POST(req : any, res : any) {

    const body = await req.json();

    const { nome, cognome, email, numero, oggetto, messaggio } = body;


    if (!messaggio || !email || !nome || !cognome || !numero || !oggetto) {
        return NextResponse.json(
          { error: "Missing required fields" },
          { status: 400 }
        );
      }


    try {
        const data = await resend.emails.send({
            from: `${nome} ${cognome} <onboarding@resend.dev>`,
            to: ['info@refreesh.it'],
            subject: oggetto,
            text: 'Email text',
            react: EmailTemplate({
                    firstName: nome,
                    lastname: cognome,
                    number: numero,
                    message: messaggio,
                    email: email,
            })
        });
    
        return NextResponse.json(data);
      } catch (error) {
        return NextResponse.json({ error });
      }
}
