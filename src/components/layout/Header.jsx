import './Header.css'
import rLetter from '../../assets/R.png'
import Button from '@mui/material/Button'

function Header() {
  return (

    
    <div className="theader">

      <div className="logoeletras">
      <img className="logo" src={rLetter} alt="logo" />
      <h1 className="topo">ADVOCACIA PREVIDENCIÁRIA E CONSULTORIA JURÍDICA</h1>

        </div>
        
      <Button href="http://www.google.com">
        Botão
        </Button>


      <Button onClick={() => {alert('Botão foi pressionado');}}>
            Click me
      </Button>

      <Button href="http://www.clem.ufba.br/tuts/html/c07.htm">
        
        Home
        
        </Button>

      </div>
      


)
}

export default Header
