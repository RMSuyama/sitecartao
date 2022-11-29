import fundo from './assets/FUNDO.png'
import rLetter from './assets/R.png'
import whats from './assets/whats.png'
import insta from './assets/insta.png'
import React from 'react'
import './App.css'
import Footer from './components/layout/Footer'
import Body from './components/layout/Body'
import Navbar from './components/layout/Navbar'



function App() {

  return (
    <>
    
      
      <div className="App">
            <div><Navbar /></div>
            <div><Body /></div>
            <div><Footer /></div>
           </div></>
  );
}

export default App;
