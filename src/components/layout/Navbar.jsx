import './Navbar.css'
import rLetter from './assets/R.png'
import whats from './assets/whats.png'
import insta from './assets/insta.png'


function Navbar() {

    return(
        <div className="tnavbar">
        <img className='rContainer' src={rLetter} />
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
              href="https://www.instagram.com/direct/inbox/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className='insta' src={insta} />
            </a>          
      </div>
    )

}

export default Navbar
