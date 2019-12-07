import { useState, useEffect } from 'react';

import { keyApiNews } from '../config/keys';


const useAsyncHook = (searchNews) => {
	const [result, setResult] = useState([]);
	const [loading, setLoading] = useState('false');

	useEffect(() => {
		const fetchNewList = async () => {
			try {
				setLoading('true');
				const response = await fetch(
					`https://newsapi.org/v2/top-headlines?country=${searchNews.c}&category=${searchNews.cat}&apiKey=${keyApiNews.key}`
				);

				const json = await response.json();
				console.log(json)

				setResult(
					json.articles.map(article => {
						return article
					})
				);
			} catch (error) {
				setLoading('null');
			}
		}

		if(searchNews !== '') {
			fetchNewList();
		}
	}, [searchNews]);
	
	return [result, loading];
}

export default useAsyncHook;