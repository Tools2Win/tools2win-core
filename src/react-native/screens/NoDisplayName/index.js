import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { useDisplayName } from '../../../hooks/useDisplayName';
import { auth } from 'tools2win-core';

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
        <View style={styles.container}>
            <Text style={styles.title}>Display Name</Text>
            <Text style={styles.subtitle}>
                Your display name will be visible to other members of the organization.
                It helps in identifying who you are within the organization.
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={setFirstName}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={setLastName}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator size="small" color="#FFFFFF" />
                    ) : (
                        <Text style={styles.buttonText}>Continue</Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={handleLogout}
                    disabled={loading}
                >
                    <Text>Logout</Text>
                </TouchableOpacity>

                {error && (
                    <Text style={styles.errorText}>
                        {error}
                    </Text>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 16,
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
        backgroundColor: '#6200EE',
        padding: 10,
        alignItems: 'center',
        borderRadius: 4,
        marginBottom: 10,
    },
    logoutButton: {
        borderColor: '#6200EE',
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
});

export default NoDisplayName;