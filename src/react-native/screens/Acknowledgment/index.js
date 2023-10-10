import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Alert, Image } from 'react-native';
import { sendEmailVerification } from 'firebase/auth';
import { auth } from '../../../firebase';
import { Text, useTheme, Button } from '@rneui/themed';

const Acknowledgment = ({ navigation }) => {
    const { theme } = useTheme();
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
            <Image
                source={require('../../../assets/art_verificationlink.jpg')}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text h4 style={[{ color: theme.colors.grey0 }, styles.text]}>Please check your email for a verification link.</Text>
            <Text style={[{ color: theme.colors.grey0 }, styles.subText]}>If you can't find the email, check your spam/junk folder</Text>
            <Button type='outline' buttonStyle={styles.button} title='Resend Verification Email' onPress={handleResendVerification} />
            <Button type='solid' buttonStyle={styles.button} title="I've verified my email" onPress={handleRefreshToken} disabled={isVerifying} />
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    subText: {
        textAlign: 'center',
        marginBottom: 30,
    },
    button: {
        borderRadius: 5,
        marginBottom: 20,
        minWidth: '80%',
    },
    logo: {
        width: '60%',
        height: '30%',
        marginBottom: 20,
        resizeMode: 'contain',
    },
});

export default Acknowledgment;
