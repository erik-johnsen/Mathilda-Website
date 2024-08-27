import { useState } from 'react'
import './Navbar.css'

function Navbar() {
	const [visibility, setVisibility] = useState(false)
	console.log(visibility);
	return(
		<div className='navbar'>
			<button className='nav_button mathilda'>Mathilda Gustafsson (digital designer)</button>
			<button className='nav_button info' onClick={()=>setVisibility(!visibility)}>Info (CLOSE)</button>
			<button className='nav_button contact'>Contact (OPEN)</button>
		</div>
	)
}

export default Navbar