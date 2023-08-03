import React, { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../../../firebase';
import logo from '../../../assets/logo.png';

const SignUp = ({ goBack }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const signUp = async () => {
        if (password !== confirmPassword) {
            alert("Error: Passwords do not match.");
            return;
        }

        if (email === '' || password === '') {
            alert('Error: Email and password are mandatory.');
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
                await sendEmailVerification(userCredential.user);
            }).catch((error) => {
                alert("Error: " + error.message);
            });
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    return (
        <div style={styles.outerContainer}>
            <div style={styles.container}>
                <img src={logo} alt="Logo" style={styles.logo} />
                <input style={styles.input} type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input style={styles.input} type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <input style={styles.input} type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                <button onClick={signUp} style={styles.button}>Sign Up</button>
                <button onClick={goBack} style={styles.goBackButton}>Go Back</button>
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
    logo: {
        width: '60%',
        marginBottom: 20,
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

export default SignUp;
