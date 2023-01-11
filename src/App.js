// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Body from './component/Body'

import home from './pages/home/Page'
import about from './pages/about/Page'
import paper from './pages/paper/Page'
import blockchain from './pages/blockchain/Page'

function App() {
  const [connected, setConnected] = useState("Connect Wallet")

  return (
    <>
      <Routes location="/*">
        <Route path='/*' element={<Header connected={connected} setConnected={setConnected} />} />
      </Routes>

      <Routes>
        <Route path='/' element={<Body {...home} />} />
        <Route path='/about' element={<Body {...about} />} />
        <Route path='/blockchain' element={<Body {...blockchain} />} />
        <Route path='/paper' element={<Body {...paper} />} />
      </Routes>

      <Routes location="/*">
        <Route path='/*' element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
