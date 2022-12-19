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
          padding: '0px'

        }}
      >       <div ClassName="ghostdiv"> </div>
              <Header/>
           </Box>

 
            
          </div>
          
          <div className='main'>
            <main/>
                <Box sx={{
                    p: 1,

                    borderRadius: 2,
                  
                     }}
                      >
                    <Body/> 
                </Box>

            
          </div>

          <div className='footer'>

          <Box sx={{
                    p: 1,
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
