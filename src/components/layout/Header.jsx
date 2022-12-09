import './Header.css'
import rLetter from '../../assets/R.png'
import Button from '@mui/material/Button'
import { textAlign } from '@mui/system';

function Header() {
  return (

    
    <div className="theader">
    
      <div className="logoeletras">
      <img className="logo" src={rLetter} alt="logo" />
      <div className="nomeadv">
          <h1 className="nome">Rafael Moreira Suyama</h1>
          <h4 className="topo">ADVOCACIA PREVIDENCIÁRIA E CONSULTORIA JURÍDICA</h4>
      </div>


        </div>
        
      <Button className="botaoHead" href="http://www.google.com" sx={{
                  color: "black",
                  textAlign:'center'

                                    
                     }}>
        Sobre mim
        </Button>


      <Button className="botaoHead" onClick={() => {alert('Estamos trabalhando nessa seção ainda');}} sx={{
                  color: "black",
                  textAlign:'center'

                     }}>
        Artigos e trabalhos acadêmicos
      </Button>

      <Button className="botaoHead" href="http://www.clem.ufba.br/tuts/html/c07.htm" sx={{
                  color: "black",
                  textAlign:'center'


                     }}>
        
        Links Úteis
        
      </Button>

      </div>
      


)
}

export default Header
