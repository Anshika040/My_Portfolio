import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'


const contact = () => {

  return (
    <section id='contact'>
      <h5>Get In Touvh</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>anshikashukla3466@gmail.com</h5>
            <a href="mailto:anshikashukla3466@gmail.com">Send a message</a>
          </article>

          <article className='contact_option'>
            <AiFillLinkedin className='contact_option-icon'/>
            <h4>Linkedin</h4>
            <h5></h5>
            <a href="mailto:anshikashukla3466@gmail.com">Send a message</a>
          </article>

          <article className='contact_option'>
          <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 8542064542</h5>
            <a href="https://api.whatsapp.com/send?phone918542064542">Send a message</a>
          </article>

        </div>

        <form >
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact