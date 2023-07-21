import React from 'react'
import './about.css'
import ME from '../../assests/portfolio img2.jpg'
import { FaAward } from 'react-icons/fa'
import { PiFoldersBold } from 'react-icons/pi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className='about_me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>Full Stack Developer</small>
            </article>

            <article className='about_card'>
              <PiFoldersBold className='about_icon' />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aperiam, quo beatae eos nostrum vel, ex optio accusamus inventore sint voluptatum fugit asperiores, quibusdam saepe. Deserunt maiores ullam iure tenetur?</p>
         <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About