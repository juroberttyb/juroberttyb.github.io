import './App.css';

import { Route, Routes } from 'react-router-dom' // Navigate
import { useState } from 'react'

import { Header, Resume} from './components'
import { Home } from './scenes'

function App() {
  const [showResume, setShowResume] = useState("Show Resume")
  const [chatText, setChatText] = useState("Chat text")
  
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
          <Route path='/' element={<Home {...{chatText, setChatText}} />} />
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
