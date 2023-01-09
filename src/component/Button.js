import React from 'react'

const Button = ({connected, setConnected}) => {
    const onClick = () => {
        setConnected(
            () => {
                return "Connected"
            }
        )
    }

  return (
    <button className="button connect" onClick={onClick}>
        {connected}
    </button>
  )
}

export default Button
