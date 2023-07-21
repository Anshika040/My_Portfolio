import React from 'react'
import './footer.css'
import {BsTelegram} from 'react-icons/bs';
import {SiInstagram} from 'react-icons/si'
import  {AiOutlineWhatsApp} from 'react-icons/ai'

const footer = () => {
  return (
    <footer>
      <a href="#"></a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>
      <div className="footer_socails">
        <a href="https://whatsapp.com"><AiOutlineWhatsApp/></a>
        <a href="https://instagram.com"><SiInstagram/></a>
        <a href="https://telegram.com"><BsTelegram/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy;Anshika Shukla @2023</small>
      </div>
    </footer>
  )
}

export default footer
