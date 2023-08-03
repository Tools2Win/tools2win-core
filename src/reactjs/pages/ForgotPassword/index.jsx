import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../../firebase';

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
        <div style={styles.outerContainer}>
            <div style={styles.container}>
                <p>Enter your email address:</p>
                <input
                    style={styles.input}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                />
                <button onClick={resetPassword} style={styles.button}>
                    Reset Password
                </button>
                <button onClick={goBack} style={styles.goBackButton}>
                    Go Back
                </button>
            </div>
        </div>
    );
};

const styles = {
    outerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: 400,
    },
    input: {
        width: '80%',
        padding: 8,
        margin: 16,
        borderBottom: '1px solid #000',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    goBackButton: {
        padding: '5px 10px',
        marginTop: '10px',
        backgroundColor: '#ccc',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default ForgotPassword;
