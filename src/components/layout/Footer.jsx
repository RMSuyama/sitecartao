import './Footer.css'
import foto from '../../assets/FotoADV.png'

function Footer() {
    return (
        <div classname='tfuti'>
            <div className="tfooter">
            <p>Rafael Suyama</p>
            <p>OAB nº 484.261</p>
            <p>Advocacia e Consultoria Jurídica Previdenciária</p>
            </div>
        
            <div className="ffoto">
                <img className="foto" src={foto} alt="foto" />
            </div>
        </div>
    )
}

export default Footer
