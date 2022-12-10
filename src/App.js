// import React from 'react'
// import Header from './component/Header'

// "homepage": ".", assets will be served relative to index.html
function App() {
  // can do some js code here
  // const test = 1;

  return (
    <button className="button primary" id="connect wallet" onClick={onClick}>
      Connect Wallet
    </button>
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
