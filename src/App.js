import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Main from "./Main";
import uuid from "react-uuid";

class App extends React.Component {
  render() {
    console.log(uuid());
    return (
      <>
        {/* <Nav /> */}
        <div className="container-fluid">
          <Main />
        </div>
      </>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
