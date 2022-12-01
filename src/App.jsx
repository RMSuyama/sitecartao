import React from 'react'
import './App.css'
import { ContactIcons } from './components/ContactIcons'
import Body from './components/layout/Body'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'

const App = () => {
  return (
    <>  
      <div className="App">
        <ContactIcons />
        <div className='header'>
          <Header/>
        </div>
        <div className='main'>
        <main/>
        <Body/>
        </div>

        <div className='footer'>
        <Footer/>
        </div>
        </div></>
  );  
}

export default App
