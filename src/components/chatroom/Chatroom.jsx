import { useState, useEffect } from 'react'
import seaOtter from '../../assets/images/seaOtter.jpg'
import _ from "lodash";
import './chatroom.css'

const Chatroom = ({activeTopic, signedIn, user}) => {

    console.log("render chatroom")

    const defaultUserName = "Sea Otter"
    const getMsgs = async () => {
        const topic = activeTopic===undefined || activeTopic.topic===undefined ? undefined : activeTopic.topic

        const controller = new AbortController()
        const res = await fetch(`http://localhost:3001/messages?count=20${`&topic=${topic}`}`, { signal: controller.signal })
        const resJson = await res.json()

        const unPackedMsgs = resJson.map((m) => {
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

        const msgs = <ul>{unPackedMsgs}</ul>
        return msgs
    }
    
    var msgs
    getMsgs().then((m) => {
        msgs = m
    })
    const [chatMsgs, setChatMsgs] = useState(msgs)
    
    useEffect(() => {
        const interval = setInterval(() => {
            // console.log('Logs every minute');

            const updateMsg = async () => {
                msgs = await getMsgs()
                console.log("_.isEqual(msgs, chatMsgs)", _.isEqual(msgs, chatMsgs));
                if (!_.isEqual(msgs, chatMsgs)) {
                    setChatMsgs(msgs)
                }
            }
    
            updateMsg()
        }, 1200);

        return () => {
            console.log("destructing...")
            const controller = new AbortController()
            controller.abort()
            clearInterval(interval);
        }
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
