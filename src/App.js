// import React from 'react'

import './App.css';

import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import { Header, Footer, Page, Resume} from './components'
import { Home, About } from './pages'

function App() {
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
          <Route path='/' element={<Page {...Home} />} />
          <Route path='/about' element={<Page {...About} />} />
        </Routes>
      }

      {
        showResume === "Show Resume" && 
        <Routes location="/*">
          <Route path='/*' element={<Footer />} />
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
