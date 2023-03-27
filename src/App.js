import './App.css';

import { Route, Routes } from 'react-router-dom' // Navigate
import { useState } from 'react'

import { Header, Resume} from './components'
import { Home } from './scenes'

import { initializeApp } from 'firebase/app';

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

  const [showResume, setShowResume] = useState("Show Resume")

  return (
    <div>
      {
        showResume === "Show Resume" &&
        <Routes location="/*">
          <Route path='/*' element={<Header buttonValue={showResume} setButtonValue={setShowResume} />} />
        </Routes>
      }

      {
        showResume === "Show Resume" &&
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/' element={<Home {...{chatText, setChatText, signedIn, setSignedIn}} />} /> */}
          {/* <Route path='/contact' element={<Contact />} /> */}
        </Routes>
      }

      {
        showResume !== "Show Resume" && 
        <Routes location="/*">
          <Route path='/*' element={<Resume />} />
        </Routes>
      }
    </div>
  );
}

export default App;

// import React, { useState } from 'react'

// export default function App() {

//   console.log(`render App`)

//   const [name, setName] = useState('')
//   console.log(`rendering app with name=(${name})`)

//   return (
//     <>
//       <input value={name} onChange={e => setName(e.target.value)} />
//       <div>My name is: {name}</div>
//     </>
//   )
// }
