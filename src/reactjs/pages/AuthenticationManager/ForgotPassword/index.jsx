import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../../../firebase';
import { Button, TextField } from '@mui/material';
import Container from '../../../components/Container';
import Image from '../../../components/Image';
import art from '../../../../assets/art_lock.jpg';

const ForgotPassword = ({ goBack }) => {
    const [email, setEmail] = useState('');

    const resetPassword = () => {
        sendPasswordResetEmail(auth, email).then(() => {
            alert("Password reset email sent!");
        }).catch((error) => {
            alert("Error: " + error.message);
        });
    };

    return (
        <Container>
            <Image image={art} />
            <TextField fullWidth label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Button fullWidth variant='contained' onClick={resetPassword}>Reset Password?</Button>
            <Button fullWidth onClick={goBack}>Go Back</Button>
        </Container>
    );
};

export default ForgotPassword;
