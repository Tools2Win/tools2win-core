import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from 'tools2win-core/src/firebase';

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const resetPassword = () => {
        sendPasswordResetEmail(auth, email).then(() => {
            Alert.alert("Password reset email sent!");
            navigation.navigate('Signin')
        }).catch((error) => {
            Alert.alert("Error", error.message);
        });
    };

    return (
        <View style={styles.container}>
            <Text>Enter your email address:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            <Button title="Reset Password" onPress={resetPassword} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        padding: 8,
        margin: 16,
        borderBottomWidth: 1,
    }
});

export default ForgotPassword;
