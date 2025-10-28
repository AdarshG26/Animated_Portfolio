import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


const Contact = () => {
  return (
    <>
    <div className="container contact" id='contact'>
      <h1>CONTACT ME</h1>
      <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
        <a href='https://www.linkedin.com/in/adarsh-gupta-07ab07243/' target='_blank' className="items"> <FaLinkedin className='icons'/> </a>
        <a href='https://github.com/AdarshG26' target='_blank' className="items"> <FaGithub className='icons'/> </a>
        <a href='mailto:adarshg2612@gmail.com' target='_blank' className="items"> <IoIosMail className='icons'/> </a>
      </div>
    </div>
    </>
  )
}

export default Contact