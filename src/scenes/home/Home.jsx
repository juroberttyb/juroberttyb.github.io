// import { useState } from 'react'
import "./home.css"

import { Download } from "../../components"
import rust from '../../assets/images/back.png'

const Home = () => {
    const img = rust
    return (
        <div className="page">
            <div id="ohana-description">
                <div id="ohana-title">Ohana</div>
                <div id="ohana-slogan">讓您的美金活存利率與世界接軌</div>
                <div class="ohana-text">
                    <p>Ohana的開發團隊相信，每個人都該擁有屬於自己的銀行，而我們已成功打造出</p>
                    <br/>
                    <p>1 - 與世界接軌的美元活存利率</p>
                    <p>2 - 比台灣銀行更好的美元匯率</p>
                    {/* <p>3 - 永久0手續費的轉帳</p> */}
                </div>
                <div id="ohana-download">
                    <Download fileUrl="https://drive.google.com/file/d/1gr01phbVevxLVv4-CZ-YMTwtYcI58ubv/view?usp=drive_link" fileName="點我下載Ohana！" />
                </div>
            </div>
            <div className='image_block'>
                { img !== undefined ? <img className="image" src={rust} alt="" /> : undefined }
            </div>
        </div>
    )
}

export default Home
