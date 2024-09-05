import './App.css'
import Navbar from './Components/Navbar/Navbar'
import './reset.css'
import Info from './Components/Info/Info'
import Contact from './Components/Contact/Contact'
import { useState, useEffect } from 'react'
import Content from './Components/Content/Content'
import jQuery from 'jquery'

function App() {

  /* NAVBAR LOGIC */
  const [infoVisibility, setInfoVisibility] = useState(false)
  const toggleInfo = ()=> {
    setInfoVisibility((prevVisibility) => !prevVisibility)

  }

  const [contactVisibility, setContactVisibility] = useState(false)
  const toggleContact = ()=> {
    setContactVisibility((prevVisibility) => !prevVisibility)
  }

  /* SCROLL */

  const [deltaY, setDeltaY] = useState(0)
  const [maxDelta, setMaxDelta] = useState(0)

  useEffect(() => {
    const maxDeltaValue = jQuery(".container-content.left").height() - window.innerHeight
    setMaxDelta(maxDeltaValue)

    jQuery(".container-content.left").css("transform", `translateY(-${jQuery(".container-content").height()}px)`)

    const ScrollHandler = (e) => {
      setDeltaY((prevDeltaY) => {
        let newDeltaY = prevDeltaY + e.deltaY
        newDeltaY = Math.max(0, newDeltaY)
        newDeltaY = Math.min(maxDeltaValue, newDeltaY)
        return newDeltaY
        
      })
      
    }

    window.addEventListener("wheel", ScrollHandler)
    window.addEventListener("DOMMouseScroll", ScrollHandler)

    return () => {
      window.removeEventListener("wheel", ScrollHandler)
      window.removeEventListener("DOMMouseScroll", ScrollHandler)

    }
  }, [maxDelta])


	
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

      <Content 
      deltaYProp={deltaY}
      maxDeltaProp={maxDelta}></Content>
      
    </div>
  )
}

export default App
