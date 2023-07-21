import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'

const headersocails = () => {
  return (
    <div className='header_socails'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><BsGithub/></a>
        <a href="https://gmail.com" target="_blank"><BiLogoGmail/></a>
    </div>
  )
}

export default headersocails