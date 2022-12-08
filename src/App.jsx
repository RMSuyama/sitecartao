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
          // bgcolor: (theme) =>
          //   theme.palette.mode === 'dark' ? '#101010' : 'grey.50',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
              <Header/>
           </Box>



            
          </div>
          
          <div className='main'>
            <main/>
                <Box sx={{
                    p: 3,
                    // bgcolor: (theme) =>
                    //   theme.palette.mode === 'dark' ? '#101010' : 'grey.50',
                    color: (theme) =>
                      theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                    border: '1px solid',
                    borderColor: (theme) =>
                      theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
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
                    // bgcolor: (theme) =>
                    //   theme.palette.mode === 'dark' ? '#101010' : 'grey.50',
                    color: (theme) =>
                      theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                    border: '1px solid',
                    borderColor: (theme) =>
                      theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                    borderRadius: 2,
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
