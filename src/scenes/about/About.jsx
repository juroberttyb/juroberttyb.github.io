// import { useState } from 'react'
import "./about.css"

import pianoImg from '../../assets/images/piano.jpg'

const About = () => {
    const text = (
        <>
            Currently, me and my friends are building a trading bot on Ethereum layer 2.<br/><br/>
            In my free time, I enjoy taking a walk and watching stand-up comedy.<br/><br/>
            For programming language, I am proficient in Go and Solidity.<br/><br/>
            {/* , playing the piano, I also love to watch Rick and Morty episodes.<br/><br/> */}
            To reach me, please use this email: juroberttyb@gmail.com
        </>
    )
    const header = (
        <> 
            About Me
        </>
    )
    const img = pianoImg

    return (
        <div className="page">
            <div className='content'> 
                <h1>
                    { header }
                </h1>
                <div className='text'>
                    { text } 
                </div>
            </div>
            <div className='image_block'>
                { img !== undefined ? <img className="image" src={img} alt="" /> : undefined }
            </div>
        </div>
    )
}

export default About
