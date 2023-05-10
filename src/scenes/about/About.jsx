// import { useState } from 'react'
import "./about.css"

import rust from '../../assets/images/rust.png'

const About = () => {
    const text = (
        <>
            I am a passionate developer, a loved son, and a kind person. Who also wants to be an active open source contributor and a caring father one day.<br/><br/>
            Currently, me and my friends are learning <a href='https://github.com/rust-lang/book'>Rust</a>.<br/><br/>
            In my free time, I enjoy taking a walk, watching stand-up comedy, and playing the piano.<br/><br/>
            I also love to watch Rick and Morty episodes!
        </>
    )
    const header = (
        <> 
            About Me
        </>
    )
    const img = rust

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
