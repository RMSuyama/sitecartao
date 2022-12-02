import './Header.css'
import rLetter from '../../assets/R.png'

function Header() {
  return (
    <div className="theader">
      <img className="logo" src={rLetter} alt="logo" />
    </div>
  )
}

export default Header
