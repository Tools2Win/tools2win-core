import React from 'react';

const ForgotPasswordButton = ({ onClick }) => (
    <div onClick={onClick} style={styles.container}>
        <span style={styles.forgotPasswordText}>Forgot Password?</span>
    </div>
);

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0',
        cursor: 'pointer',
    },
    forgotPasswordText: {
        color: '#1877F2',
        textDecoration: 'underline',
    },
};

export default ForgotPasswordButton;
