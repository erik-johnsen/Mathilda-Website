import './Content.css'
import { useEffect, useState } from 'react'
import React from 'react';

import { Player } from "@lottiefiles/react-lottie-player"
import sun from '../../assets/ani/Sun.json'
import fan from '../../assets/ani/fan.json'
import staircase from '../../assets/ani/staircase.json' 
import stripes from '../../assets/ani/stripes.json' 

import hav from '../../assets/video/Hav.mp4'
import effeff from '../../assets/video/Post.02.05.mp4'
import stein from '../../assets/video/Stein.mp4'
import scroll from '../../assets/video/Web.scroll.01.mp4'

const images = import.meta.glob('../../assets/files/*.{png,jpg,jpeg,svg,gif,avif,webp}', { eager: true });

function Content({deltaYProp, maxDeltaProp}){
	const imageList = Object.values(images).map((image, index) => (
		<img key={index} src={image.default} alt={`Image ${index + 1}`} className="image" />
	));

	const firstTen = imageList.slice(0,8)
	const lastTen = imageList.slice(8)
	
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

			<video src={effeff} autoPlay muted loop type="video/mp4" width='50%' height='50%'>
			</video>
			<Player src={sun} className="Player" loop autoplay></Player>

			{firstTen}

			<video src={stein} autoPlay muted loop type="video/mp4" width='50%' height='50%'>
			</video>
			<Player src={fan} className="Player" loop autoplay></Player>

          </div>
		</section>
		<section className='section-right'>
		<div className="container-content right" style={style_second}>
			
			<video src={hav} autoPlay muted loop type="video/mp4" width='50%' height='50%'>
			</video>
			<Player src={staircase} className="Player" loop autoplay></Player>

			{lastTen}

			<video src={scroll} autoPlay muted loop type="video/mp4" width='50%' height='50%'>
			</video>
			<Player src={stripes} className="Player" loop autoplay></Player>

          </div>
		</section>
		</div>
	)
}

export default Content