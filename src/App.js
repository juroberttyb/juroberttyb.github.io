// import React from 'react'
import Header from './component/Header'

function App() {
  // can do some js code here
  const test = 1;

  return (
    <a className="button primary" id="connect wallet" onClick={onClick}>
      Connect Wallet
    </a>
    // <div className="App">
    //   <Header />
    // </div>
  );
}

const onClick = () => {
  console.log("clicked msg")
  document.getElementById("connect wallet").innerHTML = "Connected";
}

// class App extends React.Component {
//   render() {
//     return (<h1>test</h1>)
//   }
// }

export default App;
