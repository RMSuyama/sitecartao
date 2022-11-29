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
