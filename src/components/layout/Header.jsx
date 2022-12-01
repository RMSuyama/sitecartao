import './Header.css'
import rLetter from '../../assets/R.png'

function Header() {

    return(
        <div className="theader">

        <img className='logo' src={rLetter} />
        
        {/* <div className='linkRow'>
              <a
              className="Whatsapp"
              href="https://api.whatsapp.com/send?phone=5513996267989"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className='whats' src={whats} />
            </a>
            <a
              className="Instagram"
              href="https://www.instagram.com/direct/inbox/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className='insta' src={insta} />
            </a>          
        </div> */}
      </div>
    )

}

export default Header
