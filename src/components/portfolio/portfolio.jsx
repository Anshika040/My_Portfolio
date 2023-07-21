import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/portfolio1.jpg'
import IMG2 from '../../assests/portfolio2.jpg'
import IMG3 from '../../assests/portfolio4.jpg'
import IMG4 from '../../assests/portfolio5.png'
import IMG5 from '../../assests/portfolio6.jpg'
import IMG6 from '../../assests/portfolio1.jpg'


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG1} alt=""/>
          </div>
          <h3>This is a portfolio item tittle </h3>
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank' >Live Demo</a>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG2} alt=""/>
          </div>
          <h3>This is a portfolio item tittle </h3>
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank' >Live Demo</a>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG3} alt=""/>
          </div>
          <h3>This is a portfolio item tittle </h3>
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank' >Live Demo</a>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG4} alt=""/>
          </div>
          <h3>This is a portfolio item tittle </h3>
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank' >Live Demo</a>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG5} alt=""/>
          </div>
          <h3>This is a portfolio item tittle </h3>
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank' >Live Demo</a>
        </article>
        
      </div>
    </section>
  )
}

export default portfolio