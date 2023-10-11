import React, { useState } from 'react';

const ErrorMessage = ({ message }) => (
    <div style={styles.error}>
        <p>{message}</p>
    </div>
);

const styles = {
    error: {
        marginBottom: 20,  // Increase space between error message and controls
        padding: 10,
        color: '#fff',
        backgroundColor: '#D54826FF',
    }
};

export default ErrorMessage;