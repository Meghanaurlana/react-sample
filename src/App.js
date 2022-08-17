import logo from './logo.svg';
import './App.css';
import { Hello } from './components/Hello'
import { Welcome } from './components/welcome'
import { Nav } from './components/Nav'
import Reservation from './components/Form.js';
// import{ Reservation} from './components/Form'
function App() {
  return (
    <div className="App">
      <small className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <small className='Hellos'>
          +
        </small>
        <h2>Time{new Date().toLocaleTimeString()}</h2>
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

      <br></br>
      <div>
        <Reservation />
      </div>

    </div>
  );
}

export default App;




