import './Header.css'
import rLetter from '../../assets/R.png'
import Button from '@mui/material/Button'

function Header() {
  return (

    
    <div className="theader">
    
      <div className="logoeletras">
        <img className="logo" src={rLetter} alt="logo" />
          <div className="nomeadv">
          <h1 className="nome">Rafael Moreira Suyama</h1>
          <h4 className="topo">ADVOCACIA E CONSULTORIA JURÍDICA</h4>
      </div>


        </div>
      <div className="botoes">
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

        Artigos
        </Button>

        <Button className="botaoHead" href="http://www.clem.ufba.br/tuts/html/c07.htm" sx={{
                    color: "black",
                    textAlign:'center'


                      }}>
          
          Links Úteis
          
        </Button>

      </div> 
      </div>
      


)
}

export default Header
