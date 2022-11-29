import fundo from './assets/FUNDO.png'
import rLetter from './assets/R.png'
import whats from './assets/whats.png'
import insta from './assets/insta.png'
import React from 'react'
import './App.css'



function App() {

  return (
    <>
    
      <div className="Title">
        <img className='rContainer' src={rLetter} />
      </div>

      <div className="App">

        <div className='fundoContainer'>
          <div className='imgContainer'>
            <img className='fundoBg' src={fundo} />
          </div>
          <div className='floatingLettersContainer'>
            <a
              className="App-link"
              href="https://api.whatsapp.com/send?phone=5513996267989"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className='whats' src={whats} />
            </a>
            <a
              className="App-link"
              href="https://api.whatsapp.com/send?phone=5513996267989"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className='insta' src={insta} />
            </a>          
          </div>
        </div>
      </div></>

  );
}

export default App;
