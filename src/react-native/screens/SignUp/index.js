import React, { useState } from 'react';
import {
    TextInput, Button, StyleSheet, Alert, Image,
    KeyboardAvoidingView, ScrollView, Platform
} from 'react-native';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { View } from 'react-native';
import { auth } from 'tools2win-core';

const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const signUp = async () => {
        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match.");
            return;
        }

        if (email === '' || password === '') {
            Alert.alert('Error', 'Email and password are mandatory.');
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
                await sendEmailVerification(userCredential.user);
            }).catch((error) => {
                Alert.alert("Error", error.message);
            });
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View
                contentContainerStyle={styles.container}
                keyboardShouldPersistTaps="handled"
            >
                <Image
                    source={require('../../../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />
                <Button title="Sign Up" onPress={signUp} />
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        width: '80%',
        padding: 8,
        margin: 16,
        borderBottomWidth: 1,
        alignSelf: 'center'
    },
    logo: {
        width: 250,
        height: 250,
        alignSelf: 'center',
        marginBottom: 20,
    }
});

export default SignUpScreen;
