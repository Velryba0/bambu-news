import React from 'react';

import SignIn from '../../components/sig-in/sign-in.component';

import SignUp from '../../components/sign-up/sign-up.components';

import Background from '../../components/background/background.component';

import './sign-in-and-sign-up.scss';

const SignInAndSignUpPage = () => {
    return (
        <>
        <div className='sign-in-and-sign-up' >
            <Background/>
			<SignIn />
			<SignUp/>
		</div>
        </>
    )
}

export default SignInAndSignUpPage;