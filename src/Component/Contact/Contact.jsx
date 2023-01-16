import React, {useRef} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'
import { useState } from 'react';

const Contact = () => {
    const form = useRef();
    const [msg,setmsg]=useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_v8740bs', 'template_rynkx4m', form.current, 'SUKxRe-EuMZ67SRFv')
        .then((result) => {
            console.log(result.text);
            setmsg(true)
        }, (error) => {
            console.log(error.text);
        })
    }
  return (
    <div className="contact-container">
        <div className="c-left">
            <span>Get in Touch</span>
            <span>Contact Me</span>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>

            <input type="text" name='from_name' className='contact-input' placeholder='Name' />
            <input type="email" name='from-email' className='contact-input' placeholder='E-mail' />
           <textarea className='contact-input' name="message" id="" cols="40" rows="4" placeholder='Message'></textarea>
            <button  type='submit'  className='button c-btn'>Send Me</button>
            {/* <input type="submit" value="Send" className="button"  /> */}
            
                <span>{msg && "Thanks for Contacting me."}</span>
        
            </form>
        
        </div>
    </div>
  )
}

export default Contact