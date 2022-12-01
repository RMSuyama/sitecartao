import React from 'react'
import './App.css'
import { ContactIcons } from './components/ContactIcons'
import Body from './components/layout/Body'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'

const App = () => {
<<<<<<< HEAD

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
=======
    return (
        <>
            <div className="App">
                <ContactIcons />
                <div className="header">
                    <Header />
                </div>
                <div className="main">
                    <main />
                    <Body />
                </div>
                <div className="aside"></div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    )
>>>>>>> 4749dcf18353067d4cddfc7f379efbf837e5972e
}

export default App
