import logo from './assets/logo.svg';
import logo2 from './assets/logo2.png';
import fundo from './assets/FUNDO.png'
import sLetter from './assets/S.png'
import rLetter from './assets/R.png'
import './App.css';

function App() {

  // const oi = () => {
  //   console.log(' oioooooooooo ')
  // }

  // oi();

  return (
    // nessa seção serão colocados aspectos soltos


    <div className="App">
      {/* <img src={logo2} className="App-logo2" alt="logo2" /> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <div className='fundoContainer'>
        <div className='imgContainer'>
          <img className='fundoBg' src={fundo} />
        </div>
        <div className='floatingLettersContainer'>
          {/* <div className='rContainer'> */}
            <img className='rContainer' src={rLetter} />
          {/* </div> */}
          {/* <div className='sContainer'> */}
            <img className='sContainer' src={sLetter} />
          {/* </div> */}
        </div>
      </div>
      {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      <div className='linkContainer'>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reacttt
        </a>

      </div>

      {/* <div className='' >
          <h1>
            olaaaaaaa
          </h1>
        </div> */}
    </div>
  );
}

export default App;
