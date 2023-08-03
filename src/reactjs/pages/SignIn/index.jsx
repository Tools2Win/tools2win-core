import React, { useState } from 'react';
import ErrorMessage from './ErrorMessage';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import SeparatorWithText from './SeparatorWithText';
import ForgotPasswordButton from './ForgotPasswordButton';
import SignUpButton from './SignUpButton';
import SignInButton from './SignInButton';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import logo from '../../../assets/logo.png';
import FacebookLoginButton from 'tools2win-core/src/reactjs/pages/SignIn/FacebookLoginButton';

const SignIn = ({ onForgotPasswordClick, onSignUpClick }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async () => {
        if (email === '' || password === '') {
            setError('Email and password are mandatory.');
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div style={styles.container}>
            {!!error && <ErrorMessage message={error} />}
            <div style={styles.logoContainer}>
                <img src={logo} alt="Logo" style={styles.logo} />
            </div>

            <FacebookLoginButton />

            <SeparatorWithText text="OR" />

            <div style={styles.form}>
                <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
                <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
                <SignInButton onClick={handleSignIn} />

                <div style={styles.additionalButtons}>
                    <ForgotPasswordButton onClick={onForgotPasswordClick} />
                    <SignUpButton onClick={onSignUpClick} />
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        padding: '40px 20px',
        justifyContent: 'center',
        minHeight: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f9f9f9', // You can change this color
    },
    logoContainer: {
        marginBottom: 30,
    },
    logo: {
        width: 200, // Adjusted the width
        display: 'block',
        marginBottom: 20,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 400,
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px', // Added a border radius
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // Added a shadow
    },
    additionalButtons: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 15,
    },
};

export default SignIn;
