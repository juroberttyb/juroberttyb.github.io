// import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Body from './component/Body'

import home from './pages/home/Page'
import about from './pages/about/Page'
import paper from './pages/paper/Page'
import quote from './pages/quote/Page'

function App() {
  const [connected, setConnected] = useState("Connect Wallet")

  return (
    <Router>
        <Header connected={connected} setConnected={setConnected} />

        <Routes>
          <Route path='/' element={<Body {...home} />} />
          <Route path='/about' element={<Body {...about} />} />
          <Route path='/paper' element={<Body {...paper} />} />
          <Route path='/quote' element={<Body {...quote} />} />
        </Routes>

        <Footer />
    </Router>
  );
}

export default App;
