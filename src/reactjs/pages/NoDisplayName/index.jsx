import React, { useState } from 'react';
import { useDisplayName } from '../../../hooks/useDisplayName';
import { auth } from '../../../firebase';

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
        <div style={styles.container}>
            <h1 style={styles.title}>Display Name</h1>
            <p style={styles.subtitle}>
                Your display name will be visible to other members of the organization.
                It helps in identifying who you are within the organization.
            </p>
            <div style={styles.inputContainer}>
                <input
                    style={styles.input}
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <input
                    style={styles.input}
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />

                <button
                    style={styles.button}
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Continue'}
                </button>

                <button
                    style={styles.buttonOutline}
                    onClick={handleLogout}
                    disabled={loading}
                >
                    Logout
                </button>

                {error && (
                    <span style={styles.errorText}>
                        {error}
                    </span>
                )}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        width: '100vw',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4'
    },
    title: {
        fontSize: '24px',
        marginBottom: '8px',
        color: '#333'
    },
    subtitle: {
        fontSize: '16px',
        textAlign: 'center',
        marginBottom: '24px',
        color: '#555'
    },
    inputContainer: {
        width: '80%',
        maxWidth: '400px',
    },
    input: {
        display: 'block',
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px'
    },
    button: {
        display: 'block',
        width: '100%',
        padding: '10px',
        textAlign: 'center',
        borderRadius: '4px',
        marginBottom: '10px',
        color: '#FFFFFF',
        backgroundColor: '#6200EE',
        cursor: 'pointer',
        border: 'none',
        fontSize: '16px'
    },
    buttonOutline: {
        display: 'block',
        width: '100%',
        padding: '10px',
        textAlign: 'center',
        borderRadius: '4px',
        marginBottom: '10px',
        color: '#6200EE',
        backgroundColor: 'transparent',
        border: '1px solid #6200EE',
        fontSize: '16px',
        cursor: 'pointer'
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: '10px'
    },
};

export default NoDisplayName;
