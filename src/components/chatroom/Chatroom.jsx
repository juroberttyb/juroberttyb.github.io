import { useState, useEffect } from 'react'
import seaOtter from '../../assets/images/seaOtter.jpg'
import { Lock } from '../../components'
import _ from "lodash"
import './chatroom.css'

const Chatroom = ({lock, setLock, activeTopic, signedIn, user}) => {

    console.log("render chatroom")

    const getMsgs = async () => {
        if (activeTopic === undefined) {
            return undefined
        }

        const controller = new AbortController()
        const res = await fetch(`https://ea2505f90049a33b469ef6b4937aeb18.loophole.site/messages?count=25${`&topic_id=${activeTopic._id}`}`, { 
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
        setMsg(undefined)

        const checkLock = async () => {
            setLock(activeTopic===undefined ? false : activeTopic.password !== undefined)
        }

        checkLock()
    }, [activeTopic, setLock])

    useEffect(() => {
        const interval = setInterval(() => {
            const updateMsg = async () => {
                if (lock === false) {
                    const m = await getMsgs()

                    if (msg !== undefined) {
                        console.log("isEqual(m.lastMsg, msg.lastMsg)", _.isEqual(m.lastMsg, msg.lastMsg));
                    }
                    if (msg === undefined || !_.isEqual(m.lastMsg, msg.lastMsg)) {
                        setMsg(m)
                    }
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

    const chatroom = msg === undefined ? "Someone is using the chatroom, please wait a second..." : msg.element
    return (
        <>
            <h1>
                {activeTopic === undefined ? "" : activeTopic.topic}
            </h1>
            <div id='chatroom'>
                {
                    lock ? <Lock {...{activeTopic, setLock}} /> : chatroom
                }
            </div>
        </>

    )
}

export default Chatroom
