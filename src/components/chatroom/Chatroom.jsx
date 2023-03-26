import { useState, useEffect } from 'react'
import seaOtter from '../../assets/images/seaOtter.jpg'

import './chatroom.css'

const Chatroom = ({activeTopic, signedIn, user}) => {

    console.log("render chatroom")

    const defaultUserName = "Sea Otter"
    const defaultMsg = "Loading messages..."
    const [chatMsgs, setChatMsgs] = useState(defaultMsg)
    const controller = new AbortController()
    
    useEffect(() => {
        const getMsgs = async () => {
            const topic = activeTopic===undefined || activeTopic.topic===undefined ? undefined : activeTopic.topic
            const res = await fetch(`http://localhost:3001/messages?count=15${`&topic=${topic}`}`, { signal: controller.signal })
            const msgs = await res.json()
            // console.log("msgs", msgs)
    
            // console.log("chatMsgs[chatMsgs.length-1]", chatMsgs[chatMsgs.length-1])
            // console.log("msgs[msgs.length-1]", msgs[msgs.length-1])
            // console.log("msgs[msgs.length-1] === chatMsgs[chatMsgs.length-1]", msgs[msgs.length-1] === chatMsgs[chatMsgs.length-1])
            // if (chatMsgs !== defaultMsg && chatMsgs[chatMsgs.length-1] === msgs[msgs.length-1]) {
            //     return
            // }
    
            const mapMsgs = msgs.map((m) => {
                m.created_at = m.created_at.replace("T", " ").split('.')[0]
    
                const userExist = m.user !== undefined
                const isMine = signedIn && userExist && m.user.displayName === user.displayName
    
                return (
                    <li 
                        key={`${m._id}`} 
                        className={`message ${isMine ? "my_chat_text" : ""}`}
                    >
                        <img className="photo" src={userExist ? m.user.photoURL : seaOtter} alt="" />
                        <div className='message_content'>
                            <div className='sender'>
                                {userExist ? m.user.displayName : defaultUserName} <span className='created_at'>{m.created_at}</span>
                            </div>
                            <div className='text'>{m.message}</div>
                        </div>
                    </li>
                )
            })
    
            const displayMsgs = <ul>{mapMsgs}</ul>
            setChatMsgs(displayMsgs)
        }

        getMsgs()
        // return () => {
        //     controller.abort()
        // }
    })

    useEffect(() => {
        const scrollToLatestMsg = async () => {
            const chatroom = document.getElementById("chatroom");
            chatroom.scrollTop = chatroom.scrollHeight;
        }

        scrollToLatestMsg()
    }, [chatMsgs])

    return (
        <div id='chatroom'>
            {chatMsgs}
        </div>
    )
}

export default Chatroom
