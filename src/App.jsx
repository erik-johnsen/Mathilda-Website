import './App.css'
import Navbar from './Components/Navbar/Navbar'
import './reset.css'
import Info from './Components/Info/Info'
import Contact from './Components/Contact/Contact'
import { useState } from 'react'

function App() {
  const [infoVisibility, setInfoVisibility] = useState(false)
  const toggleInfo = ()=> {
    setInfoVisibility((prevVisibility) => !prevVisibility)

  }

  const [contactVisibility, setContactVisibility] = useState(false)
  const toggleContact = ()=> {
    setContactVisibility((prevVisibility) => !prevVisibility)
  }

	
  return (
    <div className='window-container'>
      <Navbar 
      toggleInfoVisibilityProp={toggleInfo}
      toggleContactVisibilityProp={toggleContact}></Navbar>

      <div style={{display: infoVisibility ? 'flex' : 'none'}}>
        <Info></Info>
      </div>

      <div style={{display: contactVisibility ? 'flex' : 'none'}}>
        <Contact></Contact>
      </div>
      
    </div>
  )
}

export default App
