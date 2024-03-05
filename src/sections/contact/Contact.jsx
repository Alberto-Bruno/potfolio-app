import { FaWhatsapp } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import React, { useState } from "react";
import emailjs from 'emailjs-com';
import './contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_35wrdpa', 'template_1cpbvpg', formData, 'y9dIPhrlwifYJiKpa')
      .then((response) => {
        console.log('Email inviata con successo:', response);
      })
      .catch((error) => {
        console.error('Errore durante l\'invio dell\'email:', error);
      });

    // Pulisci il modulo dopo l'invio
    setFormData({
      name: '',
      email: '',
      message: '',
    });
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

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} placeholder="Nome e cognome" onChange={handleChange}/>
          <input type="email" name="email" value={formData.email} placeholder="E-mail" onChange={handleChange}/>
          <textarea name="message" rows="7" value={formData.message} placeholder="Scrivi messaggio" onChange={handleChange}></textarea>
          <input type="submit" value="Invia messaggio" className="btn btn primary" />
        </form>
      </div> 
    </section>
  )
}

export default Contact