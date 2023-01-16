import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Rahul</div>
        {/* <div className="n-toggleBtn">btn</div> */}
      </div>
      <div className="n-right">
        <ul>
          
          <li>Home</li>
          

        
          <li>About</li>
        
          

          <li>Project</li>
          
        </ul>
      </div>
        <button className="n-contactBtn button">Contact Me</button>
    </div>
  )
}

export default Navbar