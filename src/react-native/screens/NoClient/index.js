import React, { useState } from 'react';
import {
    View, Text, TextInput, TouchableOpacity,
    ActivityIndicator, StyleSheet, Image,
    KeyboardAvoidingView
} from 'react-native';
import { useInviteCode } from '../../../hooks/useInviteCode';
import { auth } from '../../../firebase';

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
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Image
                source={require('../../../assets/art_organization.jpg')}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.title}>Join an Organization</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Invite Code"
                    value={enteredInviteCode}
                    onChangeText={setEnteredInviteCode}
                />
                <TouchableOpacity
                    style={[styles.button, loading && styles.buttonDisabled]}
                    onPress={handleConsumeInviteCode}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator size="small" color="#FFFFFF" />
                    ) : (
                        <Text style={styles.buttonText}>Submit</Text>
                    )}
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonLogout}
                    onPress={handleLogout}
                >
                    <Text>Logout</Text>
                </TouchableOpacity>
                {error && (
                    <Text style={styles.errorText}>
                        {error.message || 'An error occurred while joining the client.'}
                    </Text>
                )}
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FEFEFE'
    },
    title: {
        fontSize: 24,
        marginBottom: 8,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 4,
    },
    button: {
        backgroundColor: '#F25929',
        padding: 10,
        alignItems: 'center',
        borderRadius: 4,
        marginBottom: 10,
    },
    buttonDisabled: {
        backgroundColor: '#a0a0a0'
    },
    buttonLogout: {
        borderColor: '#F25929',
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
        borderRadius: 4,
    },
    buttonText: {
        color: '#FFFFFF',
    },
    errorText: {
        color: 'red',
    },
    logo: {
        width: '60%',
        height: '30%',
        marginBottom: 20,
        resizeMode: 'contain',
    },
});

export default NoClient;
