import React from 'react';

const SignUpButton = ({ onClick }) => (
    
    <div onClick={onClick} style={styles.container}>
        <span style={styles.signUpText}>New User? Sign Up</span>
    </div>
);

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
        cursor: 'pointer',
    },
    signUpText: {
        textAlign: 'center',
        color: '#2a7bff',
        textDecoration: 'underline',
    },
};

export default SignUpButton;
