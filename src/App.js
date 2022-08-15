import logo from './logo.svg';
import './App.css';
import { Hello } from './components/Hello'
import { Welcome } from './components/welcome'
import { Nav } from './components/Nav'
function App() {
  return (
    <div className="App">
      <small className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='Hellos'>
          +
        </p>
      </small>

      <div className="Navbar">
        <Nav />
      </div>

      <div className="Greet">
        <Hello name='urlana' />
      </div>

      <div className='Welcome'>
        <Welcome />
      </div>

      <div>
        <h2>Time{new Date().toLocaleTimeString()}</h2>
      </div>

    </div>
  );
}

export default App;
