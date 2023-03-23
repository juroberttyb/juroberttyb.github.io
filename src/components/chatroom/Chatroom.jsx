import { useState, useEffect } from 'react'
import seaOtter from '../../assets/images/seaOtter.jpg'

import './chatroom.css'

const Chatroom = ({activeTopic, signedIn, user}) => {

    const defaultUserName = "Sea Otter"
    const [chatText, setChatText] = useState("Loading messages...")
    
    useEffect(() => {
        const getMsgAll = async () => {

            const controller = new AbortController()
            const topic = activeTopic===undefined || activeTopic.topic===undefined ? undefined : activeTopic.topic
            const res = await fetch(`http://localhost:3001/messages?count=15${`&topic=${topic}`}`, { signal: controller.signal })
            const msgs = await res.json()
            // console.log("msgs", msgs)

            const mapMsgs = msgs.map((m) => {
                m.created_at = m.created_at.replace("T", " ").split('.')[0]

                const userExist = m.user !== undefined
                const isMine =  signedIn && userExist && m.user.displayName === user.displayName

                return (
                    <li 
                        key={`${m._id}`} 
                        className={`message ${isMine ? "my_chat_text" : ""}`}
                    >
                        <img className="photo" src={userExist ? m.user.photoURL : seaOtter} alt="" />
                        <div className='message_content'>
                            <div className='sender'>
                                {userExist ? m.user.displayName : defaultUserName} <span className='created_at'>{m.created_at}</span>
                                {/* {isMine ? "" : `${m.user.displayName}`} <span className='created_at'>{m.created_at}</span> */}
                            </div>
                            <div className='text'>{m.message}</div>
                        </div>
                    </li>
                )
            })
            setChatText(mapMsgs)
            
            const chatroom = document.getElementById("chatroom");
            chatroom.scrollTop = chatroom.scrollHeight;

            return () => {
                controller.abort()
            }
        }

        // console.log(user)

        getMsgAll()
    })

    return (
        <div id='chatroom'>
            <ul>
                {chatText}
            </ul>
        </div>
    )
}

export default Chatroom
