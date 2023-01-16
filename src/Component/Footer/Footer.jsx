import React from 'react'
import './Footer.css'
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
        <span>@Rahul Sharma</span>
        <div className="f-icons">
            <a href="https://www.instagram.com/rahul.28.5/">

        <Insta color="white"  size={"3rem"}  />
            </a>
        <Facebook color="white" size={"3rem"} />
        <a href="https://github.com/rahul0396">

        <Github color="white" size={"3rem"} />
        </a>
      </div>
    
    </div>
  )
}

export default Footer   