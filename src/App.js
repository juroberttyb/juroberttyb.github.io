// import React from 'react'
import Header from './component/Header'

function App() {
  return (
    <button className="button primary" onClick={onClick}>
      Connect Wallet
    </button>
    // <div className="App">
    //   <Header />
    // </div>
  );
}

const onClick = () => {
  console.log("clicked msg")
  // document.getElementById("swap button").innerHTML = "Swapped";
}

// class App extends React.Component {
//   render() {
//     return (<h1>test</h1>)
//   }
// }

export default App;
