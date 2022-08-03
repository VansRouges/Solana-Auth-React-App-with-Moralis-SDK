import {MoralisProvider} from 'react-moralis'
// import logo from './logo.svg';
import './App.css'
import Home  from './Appindex';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //     You are running this application in <b>{process.env.NODE_ENV}</b> mode.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <MoralisProvider
      appId={process.env.REACT_APP_APP_ID}
      serverUrl={process.env.REACT_APP_SERVER_URL}
    >
      <p>
        You are running this application in <b>{process.env.NODE_ENV}</b> mode.
      </p>
      <Home />
    </MoralisProvider>
  );
}

export default App;
