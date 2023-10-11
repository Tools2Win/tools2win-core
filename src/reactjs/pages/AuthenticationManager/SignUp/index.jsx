import React, { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../../../../firebase';
import art from '../../../../assets/art_signup.jpg';
import { Button, TextField } from '@mui/material';
import Container from '../../../components/Container';
import Image from '../../../components/Image';

const SignUp = ({ goBack }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const signUp = async () => {
        if (password !== confirmPassword) {
            alert("Error: Passwords do not match.");
            return;
        }

        if (email === '' || password === '') {
            alert('Error: Email and password are mandatory.');
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
                await sendEmailVerification(userCredential.user);
            }).catch((error) => {
                alert("Error: " + error.message);
            });
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    return (
        <Container>
            <Image image={art} />
            <TextField fullWidth label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField fullWidth label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <TextField fullWidth label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <Button fullWidth variant='contained' onClick={signUp}>Sign Up</Button>
            <Button fullWidth onClick={goBack}>Go Back</Button>
        </Container>
    );
};

export default SignUp;
