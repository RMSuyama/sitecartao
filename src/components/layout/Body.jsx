import './Body.css'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

function Body() {

      const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Box className='bshape' sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value}   textColor="secondary" onChange={handleChange} aria-label="tab"> 
          <Tab label="Direito Previdenciário" {...a11yProps(0)} />
          <Tab label="Casos" {...a11yProps(1)} />
          <Tab label="Patrocínio" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <h2> INSS</h2>  

      <p>
                Quer se aposentar e não sabe como?
                O direito previdenciário é uma área do direito público que estuda a regulamentação da Seguridade Social.
                Seu objetivo é disciplinar a Previdência Social, definindo regras sobre o recolhimento de contribuições
                sociais e normas para concessão de benefícios previdenciários, como aposentadoria, auxílio-doença e
                pensão. O direito previdenciário garante a dignidade das pessoas conforme previsto nos artigos 6º e 201
                da Constituição Federal. Afinal, é dever do Estado amparar os beneficiários, segurados e dependentes, de
                acordo com o que está previsto na legislação previdenciária.
            </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <li>Pedido de aposentadorias;</li>
            <li>Requisição de benefícios por incapacidade;</li>
            <li>Recebimento de pensão por morte;</li>
            <li>Pgamento do salário-maternidade; </li>
            <li>Restituição de INSS e contribuições em atraso;</li>
            <li>Verificação de fraudes previdenciárias.</li>
            <p>Se você se interessou, entre em contato pelos links na tela!</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <h2> Patrocinadores</h2>

    <p>Este site recebe patrocínio da Coca-Cola. "Coca, todo mundo usa".</p>
    <p>Ele também recebe patrocínio da Eudora, pois os cabelos do Rafa, advogado, precisam ser bonitos.</p>
      </TabPanel>
    </Box>
  );
  

}

export default Body
