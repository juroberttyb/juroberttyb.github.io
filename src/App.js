// import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Body from './component/Body'

import {homePage, aboutPage, publicationPage, quotePage} from './data/Page'

function App() {
  const [connected, setConnected] = useState("Connect Wallet")

  return (
    <Router>
        <Header connected={connected} setConnected={setConnected} />

        <Routes>
          <Route path='/' element={<Body {...homePage} />} />
          <Route path='/about' element={<Body {...aboutPage} />} />
          <Route path='/publication' element={<Body {...publicationPage} />} />
          <Route path='/quote' element={<Body {...quotePage} />} />
        </Routes>

        <Footer />
    </Router>
  );
}

export default App;
