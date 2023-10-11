import React, { useState } from 'react';
import { useDisplayName } from '../../../../hooks/useDisplayName';
import { auth } from '../../../../firebase';
import Container from '../../../components/Container';
import { Button, TextField, Typography } from '@mui/material';
import Image from '../../../components/Image';
import art from '../../../../assets/art_displayname.jpg';

const NoDisplayName = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const { updateDisplayName, loading, error } = useDisplayName();

    const handleSubmit = async () => {
        const fullName = `${firstName} ${lastName}`;
        await updateDisplayName(fullName);
        await auth.currentUser.getIdTokenResult(true);
    };

    const handleLogout = async () => {
        await auth.signOut();
    };

    return (
        <Container>
            <Image image={art} />
            <Typography variant='h4'>Display Name</Typography>
            <TextField fullWidth label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <TextField fullWidth label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <Button fullWidth disabled={loading} variant='contained' onClick={handleSubmit}>Continue</Button>
            <Button fullWidth disabled={loading} onClick={handleLogout}>Logout</Button>
            {error && (
                <span style={styles.errorText}>
                    {error}
                </span>
            )}
        </Container>
    );
};

const styles = {
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: '10px'
    },
};

export default NoDisplayName;
