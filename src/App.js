// import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'

import meImg from './image/me.jpg'
import pianoImg from './image/piano.jpg'
import labImg from './image/lab.jpg'
import msImg from './image/mlab.jpg'

function App() {
  const [connected, setConnected] = useState("Connect Wallet")

  return (
    <Router>
        <Header connected={connected} setConnected={setConnected} />

        <Routes>
          <Route 
            path='/' 
            element={
              <section id="banner">
                <div class="content">
                  <header>
                    <center>
                      <h2>Hi, I'm Robert</h2>
                      <p>
                        Welcome, this is my personal website. <br/>
                        Me and my friends are always either be doing <br/>
                        or on the way to be doing something interesting. <br/>
                        Currently we are trying to build a trade bot on Ethereum. <br/>
                      </p>
                    </center>
                  </header>
                  <span class="image"><img src={meImg} alt="" /></span>
                </div>
              </section>
            }
          />

          <Route 
            path='/about' 
            element={
              <section id="banner">
                <div class="content">
                  <header>
                  <center>
                    <h2>About Me</h2>
                    <p>
                      During my free time, I enjoy taking a walk, <br/>
                      playing piano jazz and watching standup comedy. <br/>
                      Also, I made some ecosphere from time to time, <br/>
                      although useless, they look nice anyway. <br/>
                    </p>
                  </center>
                  </header>
                  <span class="image"><img src={pianoImg} alt="" /></span>
                </div>
              </section>
            }
          />

          <Route 
            path='/publication' 
            element={
              <section id="banner">
                <div class="content">
                  <header>
                    <center>
                      <h2>Publication</h2>
                      <p>
                        <a href="https://practical-dl.github.io/2022/index" color="blue">Low-rank Tensor Decomposition for Compression of<br/>Convolutional Neural Networks Using Funnel Regularization</a><br/>
                        Accepted at AAAI-2022 Workshop, cited by 3 papers.<br/>
                      </p>
                    </center>
                  </header>
                  <span class="image"><img src={labImg} alt="" /></span>
                </div>
              </section>
            }
          />

          <Route 
            path='/quotes' 
            element={
              <section id="banner">
                <div class="content">
                  <header>
                    <center>
                      <h2>Quotes</h2>
                      <p>
                        化繁為簡為智慧，而人所不能不去追尋的，謂之夢想。<br/>
                        --- Me ---<br/>
                      </p>
                    </center>
                  </header>
                  <span class="image"><img src={msImg} alt="" /></span>
                </div>
              </section>
            }
          />
        </Routes>

        <Footer />
    </Router>
  );
}

export default App;
