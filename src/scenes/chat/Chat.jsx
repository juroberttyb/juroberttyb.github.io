import { useState } from 'react'
import { Button, Chatroom, Topics } from "../../components"
import "./chat.css"

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

const Chat = () => { 

    console.log("render home")

    const [signedIn, setSignedIn] = useState(false)
    const [user, setUser] = useState(undefined)
    const [activeTopic, setActiveTopic] = useState(undefined)
    const [lock, setLock] = useState(false)

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
    
            const rawResponse = await fetch('https://ea2505f90049a33b469ef6b4937aeb18.loophole.site/messages', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: user,
                    topic_id: activeTopic===undefined ? undefined : activeTopic._id,
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
            <div className='chat'> 
                <Chatroom {...{lock, setLock, activeTopic, signedIn, user}} />
                { lock===false && 
                    <div id='chat_input'>
                        {
                            signedIn ? <Button value="Sign Out" onClick={signOut} className="sign_button" id="signOutBtn" />
                            : <Button value="Sign in with Google" onClick={signIn} className="sign_button" id="signInBtn" />
                        }
                        <input id='chat_text_input' type="text" onKeyDown={sendOnEnter} autoComplete="off"></input>
                        <Button value="Send" onClick={sendMsg} id="send_text_button" />
                    </div>
                }
            </div>
        </div>
    )
}

export default Chat
