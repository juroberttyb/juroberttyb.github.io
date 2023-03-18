import pianoImg from '../../assets/images/piano.jpg'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import "./home.css"

const Home = ({chatText, setChatText}) => { 
    
    console.log("chatText", chatText)

    useEffect(() => {
        const getMsgAll = async () => {
            const res = await fetch('http://localhost:3001/message?count=5')
            const msgs = await res.json()
            console.log("msgs", msgs)

            const mapMsgs = msgs.map((msg) => (<>{msg.from}: {msg.message} <br/></>))
            console.log("mapMsgs", mapMsgs)

            setChatText(mapMsgs)
        }

        getMsgAll()
    }, [])


    return (
        <div id="home">
            <div className='content'> 
                <h1>
                    Hi, I'm Robert
                </h1>
                {/* <div className='text'>
                    Currently, me and my friends are building a trading bot.<br/><br/>
                    In my free time, I enjoy taking a walk, playing the piano, and watching stand-up comedy. <br/><br/>
                    I also love to watch Rick and Morty episodes.<br/><br/>
                </div> */}
                <div id='chatroom'>
                    <div id='chattext'>
                        {chatText}
                    </div>
                </div>
            </div>
            <div className='image_block'>
                <img className="image" src={pianoImg} alt="" />
            </div>
            <Outlet context={{}} />
        </div>
    )
}

export default Home
