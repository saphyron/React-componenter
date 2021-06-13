import logo from './logo.svg';
import MyHeader from './Components/MyHeader';
import MyFooter from './Components/MyFooter';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyHeader />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <MyFooter />
    </div>
  );
}

export default App;
