import pianoImg from '../../assets/images/piano.jpg'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from "../../components"
import "./home.css"

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

const Home = ({chatText, setChatText, signedIn, setSignedIn}) => { 

    const defaultUserName = "Sea Otter"

    const [userId, setUserId] = useState(undefined)
    const [userName, setUserName] = useState(defaultUserName)

    useEffect(() => {
        const getMsgAll = async () => {
            const res = await fetch('https://robertchu.serveo.net/messages?count=15')
            const msgs = await res.json()
            // console.log("msgs", msgs)

            const mapMsgs = msgs.map((msg) => {
                msg.created_at = msg.created_at.replace("T", " ").split('.')[0]

                const isMine = signedIn && msg.from === userName

                return (
                    <li 
                        key={`${msg.from}${msg.created_at}`} 
                        className={`message ${isMine ? "my_chat_text" : ""}`}
                    >
                        <img className="photo" src={pianoImg} alt="" />
                        <div className='content'>
                            <div className='info'>
                                <p className='sender'>
                                    {msg.from} <span className='created_at'>{msg.created_at}</span>
                                    {/* {isMine ? "" : `${msg.from}`} <span className='created_at'>{msg.created_at}</span> */}
                                </p>
                            </div>
                            <div className='text'>{msg.message}</div>
                        </div>
                    </li>
                )
            })
            setChatText(mapMsgs)
        }

        getMsgAll()
    })

    const provider = new GoogleAuthProvider();

    const signIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log("user.photoURL:", user.photoURL)
            // IdP data available using getAdditionalUserInfo(result)
            // ...

            console.log(user.displayName)
            setSignedIn(() => {return true})
            setUserName(result.user.displayName)
            setUserId(result.user.uid)
          }).catch((error) => {
            // // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // // The email of the user's account used.
            // const email = error.customData.email;
            // // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    const signOut = () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // // User is signed in, see docs for a list of available properties
            // // https://firebase.google.com/docs/reference/js/firebase.User
            // const uid = user.uid;
            // // ...
            setSignedIn(() => {return false})
            setUserName(defaultUserName)
            setUserId(undefined)
        } else {
            // User is signed out
            // ...
            console.log("signout failed")
          }
        });
    }

    const sendMsg = async () => {
        try {
            const text = document.getElementById("chat_text_input")
            // console.log(text.value)
            // console.log("userId:", userId)
    
            const rawResponse = await fetch('https://robertchu.serveo.net/messages', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: userId,
                    from: userName,
                    message: text.value,
                })
            });
            const res = await rawResponse.json();
            console.log("res:", res)

            text.value = ""
        } catch (err) {
            console.log("error:", err);
        }
    }

    function sendOnEnter(e) {
        if(e.key === 'Enter') {
            sendMsg();
        }
    }

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
                    <ul>
                        {chatText}
                    </ul>
                </div>
                <div id='chat_input'>
                    {
                        signedIn ? <Button value="Sign Out" onClick={signOut} className="sign_button" id="signOutBtn" />
                        : <Button value="Sign in with Google" onClick={signIn} className="sign_button" id="signInBtn" />
                    }
                    <input id='chat_text_input' type="text" onKeyDown={sendOnEnter}></input>
                    <Button value="Send" onClick={sendMsg} id="send_text_button" />
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
