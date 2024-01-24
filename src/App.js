import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <main>
          <input placeholder="Email" type="email"/>
          <input placeholder="Password" type="password"/>
          <input type="submit" value="Login"/>
        </main>
      </header>
    </div>
  );
}

export default App;
