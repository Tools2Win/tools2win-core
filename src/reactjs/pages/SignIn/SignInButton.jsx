
import React from 'react';
const SignInButton = ({ onClick }) => (
    <button onClick={onClick} style={styles.button}>
        Sign In
    </button>
);

const styles = {
    button: {
        padding: 10,
        backgroundColor: '#007BFF',
        color: '#fff',
        borderRadius: 5,
        border: 'none',
        cursor: 'pointer',
    },
};

export default SignInButton;
