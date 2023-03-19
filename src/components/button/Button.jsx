import React from 'react'

import './button.css'

const Button = ({value, setValue}) => {
    const onClick = () => {
        setValue(() => {
            return "Showing Resume"
        })
    }

  return (
    <button className="button connect" onClick={onClick}>
        {value}
    </button>
  )
}

export default Button
