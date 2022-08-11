import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
function App() {
  return (
    <div className="App">
      <small className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='Hello'>
       @
        </p>
      </small>
      <div className="Greet">
        <Hello />
      </div>
    </div>
  );
}

export default App;
