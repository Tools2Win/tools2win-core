import React, { useState } from 'react';
import { useInviteCode } from 'tools2win-core/src/hooks/useInviteCode';
import { auth } from 'tools2win-core/src/firebase';

const NoClient = () => {
    const [enteredInviteCode, setEnteredInviteCode] = useState('');

    const { loading, error, consumeInviteCode } = useInviteCode();

    const handleConsumeInviteCode = async () => {
        await consumeInviteCode(enteredInviteCode);
        auth.currentUser.getIdTokenResult(true);
    };

    const handleLogout = () => {
        auth.signOut();
    }

    return (
        <div style={styles.container}>
            <div style={styles.cardContainer}>
                <div style={styles.headingContainer}>
                    <h1 style={styles.heading}>Join an Organization</h1>
                    <p style={styles.subHeading}>
                        You don't belong to an organization yet. Please enter the invite code to associate with an organization:
                    </p>
                </div>
                <input
                    placeholder="Invite Code"
                    value={enteredInviteCode}
                    onChange={e => setEnteredInviteCode(e.target.value)}
                    style={styles.input}
                />
                <button
                    style={{ ...styles.button, ...(loading ? styles.buttonDisabled : {}) }}
                    onClick={handleConsumeInviteCode}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Submit'}
                </button>
                <button
                    style={{ ...styles.button, ...styles.buttonLogout }}
                    onClick={handleLogout}
                >
                    Logout
                </button>
                {error && (
                    <p style={styles.errorMessage}>
                        {error.message || 'An error occurred while joining the client.'}
                    </p>
                )}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        backgroundColor: '#f7f7f7',
        minHeight: '100vh',
    },
    headingContainer: {
        textAlign: 'center',
        marginBottom: '24px',
    },
    heading: {
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#333',
    },
    subHeading: {
        fontSize: '16px',
        color: '#555',
        lineHeight: '1.5',
    },
    cardContainer: {
        width: '80%',
        maxWidth: '400px',
        padding: '30px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        width: '100%',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '20px',
    },
    button: {
        display: 'block',
        width: '100%',
        backgroundColor: '#4C7BDC',
        padding: '15px',
        textAlign: 'center',
        borderRadius: '5px',
        color: '#FFF',
        fontSize: '16px',
        border: 'none',
        cursor: 'pointer',
        marginBottom: '10px',
    },
    buttonDisabled: {
        backgroundColor: '#a0a0a0',
    },
    buttonLogout: {
        backgroundColor: '#DC4C4C',
    },
    errorMessage: {
        color: 'red',
        marginTop: '16px',
        textAlign: 'center',
        fontSize: '14px',
    },
};

export default NoClient;
