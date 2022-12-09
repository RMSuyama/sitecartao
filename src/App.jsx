import React from 'react'
import './App.css'
import { ContactIcons } from './components/ContactIcons'
import Body from './components/layout/Body'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Box from '@mui/material/Box';
const App = () => {
  return (
    <>  


      <div className="App">
          
          <ContactIcons />
          
          <div className='header'>

            
            
          <Box
        sx={{
          p: 3,
          fontSize: '0.875rem',
          fontWeight: '700',
          padding: '0px'

        }}
      >
              <Header/>
           </Box>

 
            
          </div>
          
          <div className='main'>
            <main/>
                <Box sx={{
                    p: 3,

                    borderRadius: 2,
                    fontSize: '0.875rem',
                    fontWeight: '700',
                  
                     }}
                      >
                    <Body/> 
                </Box>

            
          </div>

          <div className='footer'>

          <Box sx={{
                    p: 3,
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    
                    }}
                >
            <Footer/>
          </Box>

          </div>
      
      </div></>
  );  
}

export default App
