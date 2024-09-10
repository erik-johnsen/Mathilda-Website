import './Content.css'
import { useEffect, useState } from 'react'
import React from 'react';

const images = import.meta.glob('../../files/*.{png,jpg,jpeg,svg,gif,avif}', { eager: true });

function Content({deltaYProp, maxDeltaProp}){
	const imageList = Object.values(images).map((image, index) => (
		<img key={index} src={image.default} alt={`Image ${index + 1}`} className="image" />
	));

	const firstTen = imageList.slice(0,10)
	const lastTen = imageList.slice(10)
	
	const style_first = {
		transform: `translateY(-${maxDeltaProp - deltaYProp}px)`,
	};
	
	const style_second = {
		transform: `translateY(-${deltaYProp}px)`,
	};
	
	
	return(
		<div className='content'>
		<section className='section-left'>
		<div className="container-content left" style={style_first}>
			{firstTen}
          </div>
		</section>
		<section className='section-right'>
		<div className="container-content right" style={style_second}>
			{lastTen}
          </div>
		</section>
		</div>
	)
}

export default Content