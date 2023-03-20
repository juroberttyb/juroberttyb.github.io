import pianoImg from '../../assets/images/piano.jpg'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from "../../components"
import "./home.css"

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

const Home = ({chatText, setChatText, signedIn, setSignedIn}) => { 

    useEffect(() => {
        const getMsgAll = async () => {
            const res = await fetch('http://localhost:3001/message?count=5')
            const msgs = await res.json()
            // console.log("msgs", msgs)

            const mapMsgs = msgs.map((msg) => (<li>{msg.from}: {msg.message}</li>))
            // console.log("mapMsgs", mapMsgs)

            setChatText(mapMsgs)
        }

        getMsgAll()
    })

    const provider = new GoogleAuthProvider();

    const signIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...

            setSignedIn(() => {return true})
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
        } else {
            // User is signed out
            // ...
            console.log("signout failed")
          }
        });
    }

    const sendMsg = async () => {
        const text = document.getElementById("chat_text_input")
        console.log(text.value)

        const rawResponse = await fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({a: 1, b: 'Textual content'})
        });
        const content = await rawResponse.json();
        
        console.log(content);
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
                    <input id='chat_text_input'></input>
                    <Button value="Send" onClick={sendMsg} id="send_text_button" />
                </div>
            </div>
            <div className='image_block'>
                {/* <img className="image" src={pianoImg} alt="" /> */}
            </div>
            <Outlet context={{}} />
        </div>
    )
}

export default Home
