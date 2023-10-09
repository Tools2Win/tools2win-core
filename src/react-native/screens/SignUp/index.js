import React, { useState } from 'react';
import {
    TextInput, Button, StyleSheet, Alert, Image,
    KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, Text
} from 'react-native';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { View } from 'react-native';
import { auth } from '../../../firebase';

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
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.innerContainer}>
                    <Image
                        source={require('../../../assets/art_signup.jpg')}
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
                    <TouchableOpacity
                        style={styles.button}
                        onPress={signUp}
                    >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCFCFC',
        flex: 1,
    },
    innerContainer: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        padding: 8,
        margin: 16,
        borderBottomWidth: 1,
    },
    button: {
        backgroundColor: '#F25929',
        paddingVertical: 15,  // updated padding
        paddingHorizontal: 20,  // updated padding
        borderRadius: 4,
        marginBottom: 10,
        alignSelf: 'center',  // added to center the button
        minWidth: '80%',  // added to ensure a minimum width
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
    },
    logo: {
        width: '60%',
        height: '30%',
        marginBottom: 20,
        resizeMode: 'contain',
        alignSelf: 'center',  // added to center the logo
    },
});

export default SignUpScreen;