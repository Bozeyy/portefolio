import './App.css';
import { Header } from './components/Header';
import "./css/accueil.css";

function App() {
  return (
    <div className="App">
      <div className='content'>
        <Header />
        <div className='top_content'>
        </div>
        <div className='bottom_content'>
          <div className='description'>
            <h1>Simon Pereaux</h1>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className='button'>
            <button id='projects'>Mes projets</button>
            <button id='designs'>Mes designs</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
