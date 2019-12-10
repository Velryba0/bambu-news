import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import SignInAndSignUpPage from './views/sign-in-and-sign-out/sign-in-and-sign-up.component';
import SearchNews from './views/search-news/search-news.component';



const Routes = () => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
        auth.onAuthStateChanged( async userAuth => {       
            createUserProfileDocument(userAuth);
			setCurrentUser(userAuth);
			console.log(currentUser)
        })
	})
	
	return (
		<>
		<Switch>
			<Route exact path = '/'
			render = {
				() => currentUser != null ? ( <Redirect to = '/news'/>) : ( <SignInAndSignUpPage/> )
			} />
			<Route path = '/news'
			render = {
				() => currentUser == null ? ( <Redirect to = '/'/>) : ( <SearchNews /> )
			}/>
		</Switch>

		</>
	)

}

export default Routes;