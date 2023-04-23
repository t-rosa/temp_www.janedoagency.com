import { type ContactFormData } from "@/components/contact-form";

export async function POST(request: Request) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: process.env.MAIL_PORT,
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
    secure: true,
  });

  const body: ContactFormData = await request.json();

  const html = `
<!DOCTYPE html>
<html lang="fr">
  <body>
    <div style="display:flex; flex-direction: column">
      <h3>Adresse e-mail</h3> 
      <div>${body.email}</div>
    </div>
    <div style="display:flex; flex-direction: column">
      <h3>Quel est ton nom d’artiste ?*</h3> 
      <div>${body.question1}</div>
    </div>
    <div style="display:flex; flex-direction: column">
      <h3>Depuis quand fais-tu de la musique ?*</h3>  
      <div>${body.question2}</div>
    </div>
    <div style="display:flex; flex-direction: column">
      <h3>Quel est ton budget ?*</h3>  
      <div>${body.question3}</div>
    </div>
    <div style="display:flex; flex-direction: column">
      <h3>Quel est ton univers musical ?*</h3>  
      <div>${body.question4}</div>
    </div>
    <div style="display:flex; flex-direction: column">
      <h3>Quels sont les artistes avec un univers similaire au tien ?*</h3>  
      <div>${body.question5}</div>
    </div>
    <div style="display:flex; flex-direction: column">
      <h3>Sur quels réseaux es-tu déjà présent ?*</h3>  
      <div>${body.question6}</div>
    <div style="display:flex; flex-direction: column">
      <h3>T'es-tu inscrit à la SACEM ?*</h3> 
      <div>${body.question7}</div>
    </div>
  </body>
</html>
    `;

  const mailData = {
    to: "toma.rosa@protonmail.com",
    subject: `Prise de contact`,
    html,
  };

  try {
    await transporter.sendMail(mailData);
    return new Response("Success");
  } catch (e) {
    return Response.error();
  }
}
