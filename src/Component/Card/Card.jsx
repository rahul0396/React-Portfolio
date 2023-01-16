import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className="card-box">
        <div className="emoji">
            <img src={props.emoji} alt="" />
        </div>
        <div className="c-name">
            <p>
                {props.title}
            </p>
        </div>
        <div className="c-brief">
            <p>{props.desc}</p>
            </div>
    </div>
  )
}

export default Card