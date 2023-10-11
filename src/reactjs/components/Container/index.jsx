import React from 'react';
import { Container as MUIContainer, Stack } from '@mui/material';

const Container = ({ children }) => (
    <MUIContainer maxWidth='xs' style={styles.container}>
        <Stack spacing={2} alignItems='center'>
            {children}
        </Stack>
    </MUIContainer>
);

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
};

export default Container;
