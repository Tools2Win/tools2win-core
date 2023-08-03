import React, { useState, useCallback } from 'react';
import { sendEmailVerification } from 'firebase/auth';
import { auth } from 'tools2win-core/src/firebase';

const Acknowledgment = () => {
    const [isVerifying, setIsVerifying] = useState(false);

    const handleRefreshToken = useCallback(async () => {
        try {
            setIsVerifying(true);
            const idTokenResult = await auth.currentUser.getIdTokenResult(true);
            if (!idTokenResult.claims.email_verified) {
                alert("Error: Email not yet verified. Please check your email and click on the verification link.");
            }
        } catch (error) {
            alert("Error: " + error.message);
        } finally {
            setIsVerifying(false);
        }
    }, []);

    const handleResendVerification = async () => {
        try {
            await sendEmailVerification(auth.currentUser);
            alert("Success: Verification email resent. Please check your inbox.");
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    return (
        <div style={styles.container}>
            <p style={styles.text}>Please check your email for a verification link.</p>
            <p style={styles.subText}>If you can't find the email, check your spam/junk folder.</p>
            <button style={styles.button} onClick={handleResendVerification}>
                Resend Verification Email
            </button>
            <div style={styles.spacer} />
            <button style={styles.button} onClick={handleRefreshToken} disabled={isVerifying}>
                {isVerifying ? 'Verifying...' : "I've verified my email"}
            </button>
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
        backgroundColor: '#f7f7f7',
        minHeight: '100vh',
    },
    text: {
        textAlign: 'center',
        marginBottom: '10px',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    subText: {
        textAlign: 'center',
        marginBottom: '30px',
        color: '#555',
    },
    button: {
        backgroundColor: '#4C7BDC',
        padding: '10px 20px',
        borderRadius: '5px',
        margin: '5px',
        minWidth: '200px',
        alignItems: 'center',
        color: '#FFF',
        fontSize: '16px',
        border: 'none',
        cursor: 'pointer',
    },
    spacer: {
        height: '20px',
    },
};

export default Acknowledgment;
