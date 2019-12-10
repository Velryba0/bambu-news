import React, { useState } from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';
import FormSearchNews from '../../components/form-search-news/form-search-news.component';
import Card from '../../components/card/card.component';

import useAsyncHook from '../../hooks/useAsyncHook';


import './search-news.styles.scss';


const SearchNews = () => {
	
	const [country, setCountry] = useState('mx');
	const [category, setCategory] = useState('science');
	const [search, setSearch] = useState({
		c: country,
		cat: category 
	});
	const [result, loading] = useAsyncHook(search);

	console.log(result)

	const countryChange = (e) => {
		let changeCountry = document.getElementById('country');
		console.log(changeCountry.value)
		setCountry(changeCountry.value)
	}
	const catChange = (e) => {
		let changeCat = document.getElementById('category');
		e.preventDefault()
		setCategory(changeCat.value)
		console.log(changeCat.value)
	}

	const searchData = () => {
		console.log(country)
		console.log(category)
		setSearch({
			c: country,
			cat: category 
		})
	}
    
    return (
        <section>
			<h1>Busca tus noticias por país y categoría</h1>
			<FormSearchNews searchData={searchData} countryChange={countryChange} catChange={catChange}/>
			{result.map((x, index) => (<Card key={index} newsTitle={x.title} newsContent={x.content} newsImage={x.urlToImage} newsDate={x.publishedAt} newsDescription={x.description} index={index}/>))}
        </section>
    )
}

export default SearchNews;