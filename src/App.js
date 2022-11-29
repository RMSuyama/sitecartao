import logo from './assets/logo.svg';
import logo2 from './assets/logo2.png';
import fundo from './assets/FUNDO.png'
import rLetter from './assets/R.png'
import './App.css';
import whats from './assets/whats.png'

function App() {

  // const oi = () => {
  //   console.log(' oioooooooooo ')
  // }

  // oi();

  return (
    // nessa seção serão colocados aspectos soltos


    <div className="App">

      <div className='fundoContainer'>
        <div className='imgContainer'>
          <img className='fundoBg' src={fundo} />
        </div>
        <div className='floatingLettersContainer'>
            <img className='rContainer' src={rLetter} />
            {/* <img className='sContainer' src={sLetter} /> */}
            <a
              className="App-link"
              href="https://api.whatsapp.com/send?phone=5513996267989"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className='whats' src={whats} />
            </a>
          </div>
        </div>
        {/* ////aqui seria a div do linkContainer */}
      {/* <div className='linkContainer'>
      </div> */}
    </div>
  );
}

export default App;
