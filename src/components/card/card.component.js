import React from 'react';

import bg from '../../images/papaernews.jpg'

import './card.styles.scss';

const Card = ({index, newsTitle, newsImage, newsContent, newsDate, newsDescription}) => {


	const image = {
		background: `url(${newsImage}) 50% 50% no-repeat`,
        backgroundSize: 'cover',
	}
	const imagePaper = {
		background: `url(${bg}) 50% 50% no-repeat`,
        backgroundSize: 'cover',
    }
    
    const over = (e) => {
	
		// if(e.target.className != '') {
		// 	let div = document.getElementsByClassName(`${e.target.className}`).style.width = '650px'
		// 	console.log(div)
		// }
	}
	// console.log(newsImage)

    return (
        <div className={`card-${index}`} style={newsImage == null ? imagePaper : image} onMouseOver={over} >
            <h1  ><span >{newsTitle}</span></h1>
            <p ><span>{newsDescription}</span></p>
        </div>
    )
}

export default Card;