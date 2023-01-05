// import React from 'react'
// import Header from './component/Header'

// "homepage": ".", assets will be served relative to index.html
function App() {
  // can do some js code here
  // const test = 1;

  return (
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="publication.html">Publication</a></li>
      <li><a href="quotes.html">Quotes</a></li>
      <li><button className="button primary" id="connect wallet" onClick={onClick}>Connect Wallet</button></li>
    </ul>
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
