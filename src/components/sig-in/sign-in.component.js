import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () => {
    
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async event => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            // console.log(email, password)
	
        } catch (error) {
            console.log(error)
        }

    }

    const handleChange = event => {
        const { value, name } = event.target;
        name === 'email' ? 
            setEmail(value) :
            setPassword(value);
		// console.log(email, password)
    }    


    return (
        <div className='sign-in' >
                <h2>Ya tengo cuenta</h2>
                <span>Inicia Sesión con tu email y contraseña</span>

                <form onSubmit={handleSubmit} >
                    <FormInput name='email' type='email' handleChange={handleChange} value={email} label='email' required />
                    <FormInput name='password' type='password' value={password} handleChange={handleChange} label='password' required />
                    <div className='buttons'>
                    <CustomButton type='submit' > Inicar Sesión </CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn >Inicar Sesión con Google</CustomButton>
                    </div>
                </form>
            </div>
    )
}

export default SignIn;