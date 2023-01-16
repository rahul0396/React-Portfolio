import React from "react";
import "./Intro.css";
import Github from "../img/github.png";
import Linkedin from "../img/linkedin.png";
import Instagram from "../img/instagram.png";
import Rahul from "../img/rahul2.jpeg";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I am</span>
          <span>Rahul</span>
          <span>Innovative Frontend Developer with 1 year experience building and maintaining responsive website in the industry. Proficient in HTML, CSS, JavaScript and React JS. </span>
        </div>
        
        <button className="button i-button">Hire Me</button>
        <div className="i-icon">
          <a href="https://github.com/rahul0396">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/rahul-sharma-893207142/">
            <img src={Linkedin} alt="" />
          </a>
          <a href="https://www.instagram.com/rahul.28.5/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
      <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
         <img src={Rahul} alt="" />
      </div>
    </div>
  );
};

export default Intro;
