import { useState } from 'react'
import './Navbar.css'

function Navbar({toggleInfoVisibilityProp, toggleContactVisibilityProp}) {

	const [toggleOCInfo, setToggleOCInfo] = useState(true)

	const toggleOCInfoFunction = () => {
		setToggleOCInfo((prevToggle) => !prevToggle)
	}

	const [toggleOCContact, setToggleOCContact] = useState(true)

	const toggleOCContactFunction = () => {
		setToggleOCContact((prevToggle)=> !prevToggle)
	}
	return(
		<div className='navbar'>
			<button className='nav_button mathilda'>Mathilda Gustafsson (digital designer)</button>
			<button className='nav_button info' onClick={()=> {toggleInfoVisibilityProp(); toggleOCInfoFunction()}}>Info ({toggleOCInfo ? 'OPEN' : 'CLOSE'})</button>
			<button className='nav_button contact' onClick={()=> {toggleContactVisibilityProp(); toggleOCContactFunction()}}>Contact ({toggleOCContact ? 'OPEN' : 'CLOSE'})</button>
		</div>
	)
}

export default Navbar