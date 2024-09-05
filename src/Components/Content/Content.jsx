import './Content.css'
import { useEffect, useState } from 'react'

function Content({deltaYProp, maxDeltaProp}){

	const [Numbers, setNumbers] = useState([])
	const numberFunction = () => {
		let num = []
		for (let i = 0; i < 30; i++) {
			num.push(i + 1)
		}
		setNumbers(num)
	}

	useEffect(()=> (
		numberFunction()
	), [])
	
	const style_first = {
		transform: `translateY(-${maxDeltaProp - deltaYProp}px)`,
	};
	
	const style_second = {
		transform: `translateY(-${deltaYProp}px)`,
	};
	
	console.log('style_first:', style_first);
	console.log('style_second:', style_second);
	
	return(
		<div className='content'>
		<section className='section-left'>
			<div className="container-content left" style={style_first}>
				{Numbers.map(i => (
					<div key={i} className="container-content-block">
						LEFT {i}
					</div>
				))}
          </div>
		</section>
		<section className='section-right'>
		<div className="container-content right" style={style_second}>
            {Numbers.map(i => (
              <div key={i} className="container-content-block">
                RIGHT {i}
              </div>
            ))}
          </div>
		</section>
		</div>
	)
}

export default Content