import React from 'react'
import './styleForm.css'

const FormContact = () => {
  return (
    <div id="contact" className="form">
      <h2>Contact</h2>
      <form>
        <label> Your Name </label>
        <input type="text" required />
        <label> Email </label>
        <input type="email" required />
        <label> Subject </label>
        <input type="text" />
        <label> Message </label>
        <textarea row="12" placeholder="Type your message here" required />
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default FormContact
