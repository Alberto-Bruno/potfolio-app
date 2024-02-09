import { FaWhatsapp } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "emailjs-com"
import './contact.css'

function Contact() {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_35wrdpa', 'template_1cpbvpg', form.current, {
        publicKey: 'y9dIPhrlwifYJiKpa',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contact'>
      <h5>Mettiti in contatto</h5>
      <h2>Contattami</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdAttachEmail className="contact-option-icon"/>
            <h4>E-mail</h4>
            <h5>brunoalbeto97<br/>outlook.it</h5>
            <a href="mailto:brunoalbeto97@outlook.it" target="blank">Scrivi un messaggio</a>
          </article>

          <article className="contact-option">
            <FaWhatsapp className="contact-option-icon"/>
            <h4>Whatsapp</h4>
            <h5>380796856</h5>
            <a href="https://api.whatsapp.com/send?phone=3807837059" target="blank">Scrivi un messaggio</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Nome e cognome" required/>
          <input type="email" name="email" placeholder="E-mail" required/>
          <textarea name="message" rows="7" placeholder="Scrivi messaggio" required></textarea>
          <input type="submit" value="Invia messaggio" className="btn btn primary" />
        </form>
      </div> 
    </section>
  )
}

export default Contact