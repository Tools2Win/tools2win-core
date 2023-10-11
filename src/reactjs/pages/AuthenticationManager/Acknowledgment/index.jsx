import React, { useState, useCallback } from 'react';
import { sendEmailVerification } from 'firebase/auth';
import { auth } from 'tools2win-core/src/firebase';
import { Button, Typography } from '@mui/material';
import Container from '../../../components/Container';
import Image from '../../../components/Image';
import art from '../../../../assets/art_verificationlink.jpg';

const Acknowledgment = () => {
    const [isVerifying, setIsVerifying] = useState(false);

    const handleRefreshToken = useCallback(async () => {
        try {
            setIsVerifying(true);
            const idTokenResult = await auth.currentUser.getIdTokenResult(true);
            if (!idTokenResult.claims.email_verified) {
                alert("Error: Email not yet verified. Please check your email and click on the verification link.");
            }
        } catch (error) {
            alert("Error: " + error.message);
        } finally {
            setIsVerifying(false);
        }
    }, []);

    const handleResendVerification = async () => {
        try {
            await sendEmailVerification(auth.currentUser);
            alert("Success: Verification email resent. Please check your inbox.");
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    return (
        <Container>
            <Image image={art} />
            <Typography textAlign='center' variant='h4'>Please check your email for a verification link</Typography>
            <Typography textAlign='center' variant='body1'>If you can't find the email, check your spam folder</Typography>
            <Button variant='contained' fullWidth onClick={handleRefreshToken} disabled={isVerifying}>I've verified my email</Button>
            <Button fullWidth onClick={handleResendVerification}>Resend Verification Email</Button>
        </Container>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f7f7f7',
        minHeight: '100vh',
    },
    text: {
        textAlign: 'center',
        marginBottom: '10px',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    subText: {
        textAlign: 'center',
        marginBottom: '30px',
        color: '#555',
    },
    button: {
        backgroundColor: '#4C7BDC',
        padding: '10px 20px',
        borderRadius: '5px',
        margin: '5px',
        minWidth: '200px',
        alignItems: 'center',
        color: '#FFF',
        fontSize: '16px',
        border: 'none',
        cursor: 'pointer',
    },
    spacer: {
        height: '20px',
    },
};

export default Acknowledgment;
