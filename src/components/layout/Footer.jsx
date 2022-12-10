import './Footer.css'
import fotoza from '../../assets/FotoADV.png'
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { textAlign } from '@mui/system';

const style = {

  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>No entanto, caso tenha interesse em deixar registrado para futuras possibilidades entre em contato via e-mail.</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 600, textAlign:"justify"}}>
          <h2 id="child-modal-title">Obrigado pela consideração pelo nosso trabalho!</h2>
          
          <p id="child-modal-description">
            Envie a proposta via e-mail para "rafaelsuyamaadv@gmail.com" com o assunto "AGENDA DE PALESTRA", entrarei em contato o mais breve possível.
          </p>


          <Button onClick={handleClose}>Voltar</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function Footer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    <div>
       
            
            {/* <img className="logo1" src={rLetter} alt="logo" /> */}

                
            <div className="tfooter">

                <Box className='blocoendfoto'>
                        <img className='fotoza' src={fotoza} alt="Girl in a jacket" width="150" height="200"></img>
                        <Box className='dadosadv'>

                        <p>Rafael Moreira Suyama</p>
                        <p>OAB nº 484.261</p>
                        <p>Advogado e Consultor Jurídico</p>

                        </Box>

                        

                        {/* <Box className='dadoesc'>

                          <p>Escritório localizado na rua Bolívia, nº 61, Vila Ribeirópolis, Registro/SP, CEP:11900-000.</p>


                        </Box>   */}
                </Box>

              

              <Button className="trabalheconosco" onClick={handleOpen}>Agendamento de Palestras</Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="parent-modal-title"
                      aria-describedby="parent-modal-description"
                    >
                      <Box sx={{ ...style, width: 500 }}>
                        <h2 id="parent-modal-title">Infelizmente, não dispomos de horário na agenda para agendamento de palestra para esse mês.</h2>
                        <p id="parent-modal-description">
                          Agradecemos imensamente seu interesse.
                        </p>
                        <ChildModal />
                      </Box>
                    </Modal>



   

            </div>


    
  
    </div>

                      



  );
}

