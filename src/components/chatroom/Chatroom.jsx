import { useState, useEffect } from 'react'
import seaOtter from '../../assets/images/seaOtter.jpg'
import { Lock } from '../../components'
import _ from "lodash"
import './chatroom.css'

const Chatroom = ({activeTopic, signedIn, user}) => {

    console.log("render chatroom")

    const [lock, setLock] = useState(false)
    useEffect(() => {
        const checkLock = async () => {
            setLock(activeTopic===undefined ? false : activeTopic.topic === "Family" || activeTopic.topic === "RobertSophie")
        }

        checkLock()
    }, [activeTopic])

    const getMsgs = async () => {
        const topic = activeTopic===undefined || activeTopic.topic===undefined ? undefined : activeTopic.topic

        const controller = new AbortController()
        const res = await fetch(`https://34.31.39.182/messages?count=25${`&topic=${topic}`}`, { 
            method: "GET",
            mode: 'cors', 
            signal: controller.signal,
        })
        const resJson = await res.json()

        const liMsgs = resJson.map((m) => {
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
                                {userExist ? m.user.displayName : "Sea Otter"} <span className='created_at'>{m.created_at}</span>
                            </div>
                            <div className='text'>{m.message}</div>
                        </div>
                    </li>
            )
        }, [activeTopic, signedIn, user])

        return {
            element: <ul>{liMsgs}</ul>,
            lastMsg: resJson[resJson.length - 1], 
        };
    }

    // should probably use useRef here instead of useState
    const [msg, setMsg] = useState()
    const chatRefreshTime = 1200
    useEffect(() => {
        const interval = setInterval(() => {
            const updateMsg = async () => {
                const m = await getMsgs()
                if (msg !== undefined) {
                    console.log("isEqual(m.lastMsg, msg.lastMsg)", _.isEqual(m.lastMsg, msg.lastMsg));
                }
                if (msg === undefined || !_.isEqual(m.lastMsg, msg.lastMsg)) {
                    setMsg(m)
                }
            }
            updateMsg()
        }, chatRefreshTime);

        return () => {
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
    }, [msg])

    const chatroom = msg === undefined ? "Loading messages far away, please wait a second..." : msg.element
    return (
        <div id='chatroom'>
            {
                lock ? <Lock {...{setLock}} /> : chatroom
            }
        </div>
    )
}

export default Chatroom
