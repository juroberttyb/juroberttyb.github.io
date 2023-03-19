import pianoImg from '../../assets/images/piano.jpg'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import "./home.css"

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Home = ({chatText, setChatText}) => { 

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
    }, [])

    const provider = new GoogleAuthProvider();

    const signIn = () => {
        console.log("clicked")
        const auth = getAuth();
        signInWithPopup(auth, provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...

            console.log("token", token)
            console.log("user", user)
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    return (
        <div id="home">
            <div className='content'> 
                <h1>
                    Hi, I'm Robert
                    <div>
                        <button id="signInBtn" class="btn btn-primary" onClick={signIn}>Sign in with Google</button>         
                    </div>
                    <div>
                        <button id="signOutBtn" class="btn btn-primary">Sign Out</button>
                    </div>
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
            </div>
            <div className='image_block'>
                <img className="image" src={pianoImg} alt="" />
            </div>
            <Outlet context={{}} />
        </div>
    )
}

export default Home
