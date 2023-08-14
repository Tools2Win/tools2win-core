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
                    style={styles.logoutButton}
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
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        width: '100vw',
        height: '100vh',
    },
    title: {
        fontSize: '24px',
        marginBottom: '8px',
    },
    subtitle: {
        fontSize: '16px',
        textAlign: 'center',
        marginBottom: '16px',
    },
    inputContainer: {
        width: '100%',
        marginBottom: '12px',
    },
    input: {
        borderWidth: '1px',
        borderColor: '#ccc',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '4px',
        width: '100%',
    },
    button: {
        backgroundColor: '#6200EE',
        padding: '10px',
        textAlign: 'center',
        borderRadius: '4px',
        marginBottom: '10px',
        color: '#FFFFFF',
        border: 'none',
        cursor: 'pointer',
    },
    logoutButton: {
        borderColor: '#6200EE',
        borderWidth: '1px',
        padding: '10px',
        textAlign: 'center',
        borderRadius: '4px',
        color: '#6200EE',
        cursor: 'pointer',
    },
    buttonText: {
        color: '#FFFFFF',
    },
    errorText: {
        color: 'red',
    },
};

export default NoDisplayName;
