import React, { useState } from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';
import FormSearchNews from '../../components/form-search-news/form-search-news.component';

import { auth } from '../../firebase/firebase.utils';
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
	console.log(loading)

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

	const logOut = () => {
		auth.signOut();
	 }
    
    return (
        <section>
			<h1>Busca tus noticias por país y categoría</h1>
			<FormSearchNews searchData={searchData} countryChange={countryChange} catChange={catChange}/>
            <CustomButton type='button' onClick={logOut} >Salir</CustomButton>
	{result.map((x, i) => (<li key={i} >{x.title}</li>))}
        </section>
    )
}

export default SearchNews;