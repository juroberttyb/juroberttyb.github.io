import { Route, Routes } from 'react-router-dom' // Navigate
import { useState } from 'react'
import { Header, Resume} from './components'
import { Chat } from './scenes' // Home
import { initializeApp } from 'firebase/app'
import './App.css'

function App() {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyDItep3DeU8ujH7m_Wf-7lJ61MzQrSyiJ8",
        authDomain: "chatrom-80ffa.firebaseapp.com",
        projectId: "chatrom-80ffa",
        storageBucket: "chatrom-80ffa.appspot.com",
        messagingSenderId: "998543368520",
        appId: "1:998543368520:web:31be86144a1d393870537d",
        measurementId: "G-4SX6W8HBLM"
    };

    // Initialize Firebase
    // const app = initializeApp(firebaseConfig);
    initializeApp(firebaseConfig);

    const [showResume, setShowResume] = useState("Developer Info")

    return (
        <div>
            {
                showResume === "Developer Info" &&
                <Routes location="/*">
                    <Route path='/*' element={<Header buttonValue={showResume} setButtonValue={setShowResume} />} />
                </Routes>
            }

            {
                showResume === "Developer Info" &&
                <Routes>
                    <Route path='/' element={<Chat />} />
                    {/* <Route path='/chat' element={<Home />} /> */}
                    {/* <Route path='/policy' element={<Policy />} /> */}
                </Routes>
            }

            {
                showResume !== "Developer Info" && 
                <Routes location="/*">
                    <Route path='/*' element={<Resume />} />
                </Routes>
            }
        </div>
    );
}

export default App;

