// import { useState } from 'react'
import "./home.css"

import rust from '../../assets/images/back.png'

const Home = () => {
    const text = (
        <>
            <b>Robert's main page</b> <br/>
        </>
    )
    const header = (
        <> 
            {/* a header content */}
        </>
    )
    const img = rust

    return (
        <div className="page">
            <div className='content'> 
                <h1>
                    { header }
                </h1>
                <div className='image_block'>
                    { img !== undefined ? <img className="image" src={img} alt="" /> : undefined }
                </div>
                <div className='text'>
                    { text } 
                </div>
            </div>
        </div>
    )
}

export default Home
