// import React from 'react'

import './index.css';

import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import { Header, Footer, Page, Resume} from './component'
import { Home, About } from './pages'

function App() {
  const [showResume, setShowResume] = useState("Show Resume")
  
  return (
    <>
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
    </>
  );
}

export default App;
