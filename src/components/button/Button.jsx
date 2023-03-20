import React from 'react'

import './button.css'

const Button = ({value, onClick, className, id}) => {
  className = className == undefined ? "button" : className + " button"
  return (
    <button id={id == undefined ? id : ""} className={className} onClick={onClick}>
        {value}
    </button>
  )
}

export default Button
