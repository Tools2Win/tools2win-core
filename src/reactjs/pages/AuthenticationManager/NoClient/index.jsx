import React, { useState } from 'react';
import { useInviteCode } from '../../../../hooks/useInviteCode';
import { auth } from '../../../../firebase';
import { Button, TextField, Typography } from '@mui/material';
import Container from '../../../components/Container';
import Image from '../../../components/Image';
import art from '../../../../assets/art_organization.jpg';

const NoClient = () => {
    const [enteredInviteCode, setEnteredInviteCode] = useState('');

    const { loading, error, consumeInviteCode } = useInviteCode();

    const handleConsumeInviteCode = async () => {
        await consumeInviteCode(enteredInviteCode);
        auth.currentUser.getIdTokenResult(true);
    };

    const handleLogout = () => {
        auth.signOut();
    }

    return (
        <Container>
            <Image image={art} />
            <Typography variant='h4'>Join an Organization</Typography>
            <TextField fullWidth label="Invite Code" value={enteredInviteCode} onChange={(e) => setEnteredInviteCode(e.target.value)} />
            <Button fullWidth disabled={loading} variant='contained' onClick={handleConsumeInviteCode}>Submit</Button>
            <Button fullWidth disabled={loading} onClick={handleLogout}>Logout</Button>
            {error && (
                <p style={styles.errorMessage}>
                    {error.message || 'An error occurred while joining the client.'}
                </p>
            )}
        </Container>
    );
};

const styles = {
    errorMessage: {
        color: 'red',
        marginTop: '16px',
        textAlign: 'center',
        fontSize: '14px',
    },
};

export default NoClient;
