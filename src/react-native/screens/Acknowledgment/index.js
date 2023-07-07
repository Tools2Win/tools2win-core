import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import { sendEmailVerification } from 'firebase/auth';
import { auth } from 'tools2win-core';

const Acknowledgment = ({ navigation }) => {
    const [isVerifying, setIsVerifying] = useState(false);

    const handleRefreshToken = useCallback(async () => {
        try {
            setIsVerifying(true);
            const idTokenResult = await auth.currentUser.getIdTokenResult(true);
            if (!idTokenResult.claims.email_verified) {
                Alert.alert("Error", "Email not yet verified. Please check your email and click on the verification link.");
            }
        } catch (error) {
            Alert.alert("Error", error.message);
        } finally {
            setIsVerifying(false);
        }
    }, [navigation]);

    const handleResendVerification = async () => {
        try {
            await sendEmailVerification(auth.currentUser);
            Alert.alert("Success", "Verification email resent. Please check your inbox.");
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Please check your email for a verification link.</Text>
            <Text style={styles.subText}>If you can't find the email, check your spam/junk folder.</Text>
            <TouchableOpacity style={styles.button} onPress={handleResendVerification}>
                <Text style={styles.buttonText}>Resend Verification Email</Text>
            </TouchableOpacity>
            <View style={styles.spacer} />
            <TouchableOpacity style={styles.button} onPress={handleRefreshToken} disabled={isVerifying}>
                {isVerifying ? <ActivityIndicator color="#FFF" /> : <Text style={styles.buttonText}>I've verified my email</Text>}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f7f7f7'
    },
    text: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    subText: {
        textAlign: 'center',
        marginBottom: 30,
        color: '#555'
    },
    button: {
        backgroundColor: '#4C7BDC',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 5,
        minWidth: 200,
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16
    },
    spacer: {
        height: 20
    }
});

export default Acknowledgment;
