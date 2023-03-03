// import React from 'react'

import './index.css';

import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Body from './component/Body'
import Resume from './component/Resume'

import home from './pages/home/Page'
import about from './pages/about/Page'
import piano from './pages/piano/Page'
import comedy from './pages/comedy/Page'

function App() {
  const [showResume, setShowResume] = useState("Show Resume")
  
  // Routes location="/*"
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
          <Route path='/' element={<Body {...home} />} />
          <Route path='/about' element={<Body {...about} />} />
          <Route path='/piano' element={<Body {...piano} />} />
          <Route path='/comedy' element={<Body {...comedy} />} />
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
