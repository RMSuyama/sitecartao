import './Footer.css'
import rLetter from '../../assets/R.png'
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

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
      <Button onClick={handleOpen}>Clique aqui kkkk</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Poxa vida</h2>
          
          <p id="child-modal-description">
            Caramba, para de ser curioso
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

            {/* <Button onClick={handleOpen}>Clique aqui para saber mais</Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="parent-modal-title"
                      aria-describedby="parent-modal-description"
                    >
                      <Box sx={{ ...style, width: 400 }}>
                        <h2 id="parent-modal-title">Te peguei</h2>
                        <p id="parent-modal-description">
                          Era mentira.
                        </p>
                        <ChildModal />
                      </Box>
                    </Modal> */}



              <div className='haha'>

                <p>Escritório localizado na rua Bolívia, nº 61, Vila Ribeirópolis, Registro/SP, CEP:11900-000.</p>
                <p>OAB nº 484.261</p>
                <p>Advogado e Consultor Jurídico</p>

              </div>

              




   

            </div>


    
  
    </div>

                      



  );
}

