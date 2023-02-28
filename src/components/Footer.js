import React from 'react'
import {FaLinkedin, FaGithubSquare, FaInstagram, FaEnvelope} from 'react-icons/fa';
import {BiMailSend} from 'react-icons/bi';
import '../styles/Footer.css';
import '../styles/Icon.css';
function Footer() {
  return (
    <div className='Footer'>
        
        <div className='Icons'>
            <a href='https://www.linkedin.com/in/gerardo-hernandez-macoto-129364176/' target={"_blank"}><FaLinkedin size={50}/></a>
            <a href="mailto:gerardoh085@gmail.com" target={"_blank"}><FaEnvelope size={50}/></a>
            <a href="https://github.com/gerardoh085" target={"_blank"}><FaGithubSquare size={50}/></a>
        </div>
        <p>&copy; 2022 Gerardo Hernandez Macoto Website</p>
    </div>
  )
}

export default Footer;
