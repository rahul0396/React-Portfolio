import React from 'react'
import Card from '../Card/Card'
import '../Intro.css'
import './Services.css'
import Image from '../../img/glassesimoji.png'
import Image2 from '../../img/heartemoji.png'
import Resume from '../../Assests/Resume.pdf'
const Services = () => {
  return (
    <div className="services">
        <div className="s-left">
        <span>My Awesome </span>
        <span>Skills</span>
        <span>HTML5, CSS, JavaScript, React JS, C, C++, Python.</span>
        <a href={Resume} download>

        <button className="button i-button">Download CV</button>
        </a>
        </div>
        <div className="s-right">

        <Card emoji={Image} title="Frontend Developer" desc="HTML, CSS, JavaScript, React JS"/>
        {/* /* <Card emoji={Image2} title="Developer" desc="HTML, CSS, JavaScript  React"/> */} 
         
        {/* <Card emoji={Image2} title="UI/Ux" desc="UI and Ux designer"/>  */}
        </div>
    </div>
  )
}

export default Services