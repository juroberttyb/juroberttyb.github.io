import pianoImg from '../../assets/images/piano.jpg'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
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
            console.log("signout successfull")
        } else {
            // User is signed out
            // ...
            console.log("signout failed")
          }
        });
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
                        signedIn ? <button id="signOutBtn" class="sign_button" onClick={signOut}>Sign Out</button> : <button id="signInBtn" class="sign_button" onClick={signIn}>Sign in with Google</button>
                    }
                    <input class='chat_text_input'></input>
                    <button class='send_text_button'>send</button>
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
