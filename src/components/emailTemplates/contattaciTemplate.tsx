

interface EmailTemplateProps {
    firstName: string;
      lastname: string;
      number: string;
      message: string;
      email: string;
  }
  
  export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    lastname,
    number,
    message,
    email,
  }) => (
    <div>
      <h1>Nuova richiesta di contatto da parte di {`${firstName} ${lastname}`}</h1>
      <h2>Dati</h2>
      <h3>Numero di telefono: {number}</h3>
      <h3>Email: {email}</h3>
      <hr />
      <h2>Messaggio</h2>
      <h3>{message}</h3>
    </div>
  );
  