// import pianoImg from '../../assets/images/piano.jpg'
import seaOtter from '../../assets/images/seaOtter.jpg'
import { useState, useEffect } from 'react'
// import { Outlet } from 'react-router-dom'
import { Button, Topics } from "../../components"
import "./home.css"

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

const Home = () => { 

    const defaultUserName = "Sea Otter"
    const [chatText, setChatText] = useState("Loading messages...")
    const [signedIn, setSignedIn] = useState(false)
    const [user, setUser] = useState(undefined)
    const [activeTopic, setActiveTopic] = useState(undefined)

    useEffect(() => {
        const getMsgAll = async () => {
            const res = await fetch('http://localhost:3001/messages?count=15')
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
                        <div className='content'>
                            <div className='info'>
                                <p className='sender'>
                                    {userExist ? m.user.displayName : defaultUserName} <span className='created_at'>{m.created_at}</span>
                                    {/* {isMine ? "" : `${m.user.displayName}`} <span className='created_at'>{m.created_at}</span> */}
                                </p>
                            </div>
                            <div className='text'>{m.message}</div>
                        </div>
                    </li>
                )
            })
            setChatText(mapMsgs)
            
            const chatroom = document.getElementById("chatroom");
            chatroom.scrollTop = chatroom.scrollHeight;
        }

        // console.log(user)

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
            // IdP data available using getAdditionalUserInfo(result)
            // ...

            setSignedIn(() => {return true})
            setUser(() => {return user})
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
            setUser(undefined)
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
    
            const rawResponse = await fetch('http://localhost:3001/messages', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: user,
                    // toTopic: userName,
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
            <Topics {...{activeTopic, setActiveTopic}} />
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
                    <input id='chat_text_input' type="text" onKeyDown={sendOnEnter} autocomplete="off"></input>
                    <Button value="Send" onClick={sendMsg} id="send_text_button" />
                </div>
            </div>
            {/* <div className='image_block'>
                <img className="image" src="https://firebasestorage.googleapis.com/v0/b/chatrom-80ffa.appspot.com/o/Sea%20Otter%20Raft%20of%20Four.png?alt=media&token=06b8d645-de73-4551-8f62-b7bfe537399f" alt="" />
            </div> */}
            {/* <Outlet context={{}} /> */}
        </div>
    )
}

export default Home
