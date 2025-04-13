import React from 'react'
import Shedule from './Schedule/Schedule'

function Contact() {
  return (
    <div>   
    <div id='contact'>
    
        <h1>CONTACT US</h1>
        <form action="https://formsubmit.co/roman189389@gmail.com" method="POST" >
            <input type='text' placeholder='Full Name' required  name="name"/>
            <input type='email' placeholder='Type Your E-Mail' required  name="email"/>
            <textarea placeholder='Write Here......' name='message' required  type='text'></textarea>
            <input type='submit' value="Send"/>
        </form>
    </div>
    </div>

  )
}

export default Contact
