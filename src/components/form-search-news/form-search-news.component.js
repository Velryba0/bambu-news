import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './form-search-news.styles.scss'

const FormSearchNews = ({countryChange, catChange, searchData}) => {
    
    const dataCountrys = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];

    const dataCategory = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']; 
    
    return (
        <form >
				<select id='country' name='country' onChange={countryChange}>
				{dataCountrys.map(x => (<option key={x} value={x}>{x}</option>))}
				</select>
				<select id='category' name='category'onChange={catChange}>
				{dataCategory.map(x => (<option key={x} value={x}>{x}</option>))}
				</select>
				<CustomButton type='button' onClick={searchData} >Buscar</CustomButton>
			</form>
    )
}

export default FormSearchNews;