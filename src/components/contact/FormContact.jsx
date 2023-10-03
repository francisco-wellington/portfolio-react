import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import './styleForm.css'

const FormContact = () => {
  const form = useRef()

  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_j2k5ro8',
        'template_rq66j8o',
        e.target,
        '4Q6hToD6u3w8RhigK'
      )
      .then(
        result => {
          console.log(result.text)
          alert('Email Successfully Sent!')
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <div id="contact" className="form">
      <form ref={form} onSubmit={sendEmail}>
        <h2>Contato</h2>
        <label> Nome </label>
        <input type="text" name="name" required />
        <label> Email </label>
        <input type="email" name="user_email" required />
        <label> Assunto </label>
        <input type="text" name="subject" />
        <label> Mensagem </label>
        <textarea
          name="message"
          row="4"
          placeholder="Type your message here"
          required
        />
        <button className="btn" type="submit">
          Enviar
        </button>
      </form>
    </div>
  )
}

export default FormContact
