import React, { useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

const SignUp = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	
	// const [newUser, setNewUser] = useState({
	// 	displayName: '',
	// 	email: '',
	// 	password: '',
	// 	confirmPassword: ''
	// })

    const handleSubmit = async event => {
		event.preventDefault();
		if(password != confirmPassword) {
			alert('La contraseña no coincide');
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			console.log(displayName)
            await createUserProfileDocument(user, {displayName} );
            
            await user.updateProfile({
                displayName
            })
			console.log({displayName})

			setDisplayName('')
			setEmail('')
			setPassword('')
			setConfirmPassword('')
			
		} catch(error) {
			console.log(error)
		}
	}

	const handleChange = event => {
		const { name, value } = event.target;
		console.log(name)

		name == 'displayName' ? 
		setDisplayName(value) : 
		name == 'email' ? 
		setEmail(value) :
		name == 'password' ? 
		setPassword(value) : 
		setConfirmPassword(value);
		
			
	};

	return (
		<div className='sign-up'>
                <h2 className='title'>No tengo cuenta</h2>
                <span>Regístrate con tu email y contraseña</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput
                    type='displayName'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Nombre'
                    required
                    />
                        <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                    />    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Contraseña'
                    required
                    />    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confrmar contraseña'
                    required
                    />
                    <CustomButton type='submit'>
                        Regístrate
                    </CustomButton>

             
                </form>
            </div>
	)


}

export default SignUp;