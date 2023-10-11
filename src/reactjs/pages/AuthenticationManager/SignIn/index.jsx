import React, { useState } from 'react';
import ErrorMessage from './ErrorMessage';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../firebase';
import logo from '../../../../assets/logo.png';
import { Button, TextField } from '@mui/material';
import Container from '../../../components/Container';
import Image from '../../../components/Image';

const SignIn = ({ onForgotPasswordClick, onSignUpClick }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async () => {
        if (email === '' || password === '') {
            setError('Email and password are mandatory.');
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Container>
            {!!error && <ErrorMessage message={error} />}
            <Image image={logo} />
            <TextField fullWidth label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField fullWidth label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button variant='contained' fullWidth onClick={handleSignIn}>Sign In</Button>
            <Button fullWidth onClick={onForgotPasswordClick}>Forgot Password?</Button>
            <Button fullWidth onClick={onSignUpClick}>New User? Sign Up</Button>
        </Container>
    );
};

export default SignIn;
