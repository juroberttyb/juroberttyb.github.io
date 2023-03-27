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
        const res = await fetch(`https://ro.serveo.net/messages?count=25${`&topic=${topic}`}`, { 
            signal: controller.signal,
            mode: 'cors', 
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
                                {userExist ? m.user.displayName : defaultUserName} <span className='created_at'>{m.created_at}</span>
                            </div>
                            <div className='text'>{m.message}</div>
                        </div>
                    </li>
            )
        }, [activeTopic, signedIn, user])

        // const myPromise = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //       resolve("Promise resolved");
        //     }, 10000);
        // });
        
        // // wait for the promise to resolve
        // await myPromise.then((result) => {
        //     console.log(result);
        //     // continue with the rest of the code here
        
        //     console.log("log before promise resolved");
        // });

        return {
            element: <ul>{liMsgs}</ul>,
            lastMsg: resJson[resJson.length - 1], 
        };
    }

    const initMsg = getMsgs()
    const [msg, setMsg] = useState(initMsg)
    
    const chatRefreshTime = 1200
    useEffect(() => {
        const interval = setInterval(() => {
            const updateMsg = async () => {
                const m = await getMsgs()
                console.log("_.isEqual(lastMsg, lastChatMsg)", _.isEqual(m.lastMsg, msg.lastMsg));
                if (!_.isEqual(m.lastMsg, msg.lastMsg)) {
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

    return (
        <div id='chatroom'>
            {
                msg.element === undefined ? "loading messages from far away, please wait around 5 seconds..." : msg.element
            }
        </div>
    )
}

export default Chatroom
