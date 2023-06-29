import React from 'react'
import CV from '../../assets/cv.pdf'
const headerButtons = () => {
  return (
    <div className="hbtn">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default headerButtons