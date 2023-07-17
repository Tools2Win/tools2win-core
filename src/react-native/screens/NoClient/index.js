import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { useInviteCode } from '../../../hooks/useInviteCode';
import { Card, Input } from 'react-native-elements';
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
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Join an Organization</Text>
                    <Text style={styles.subHeading}>
                        You don't belong to an organization yet. Please enter the invite code to associate with an organization:
                    </Text>
                </View>
                <Card containerStyle={styles.cardContainer}>
                    <Input
                        placeholder="Invite Code"
                        value={enteredInviteCode}
                        onChangeText={setEnteredInviteCode}
                        inputContainerStyle={styles.input}
                    />
                    <TouchableOpacity
                        style={[styles.button, loading && styles.buttonDisabled]}
                        onPress={handleConsumeInviteCode}
                        disabled={loading}
                    >
                        {loading ? <ActivityIndicator size="small" color="#FFF" /> : <Text style={styles.buttonText}>Submit</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonLogout]}
                        onPress={handleLogout}
                    >
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                    {error && (
                        <Text style={styles.errorMessage}>
                            {error.message || 'An error occurred while joining the client.'}
                        </Text>
                    )}
                </Card>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#f7f7f7'
    },
    headingContainer: {
        alignItems: 'center',
        marginBottom: 16
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8
    },
    subHeading: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555'
    },
    cardContainer: {
        marginBottom: 20,
        padding: 20
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 16
    },
    button: {
        backgroundColor: '#4C7BDC',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 5,
        alignItems: 'center'
    },
    buttonDisabled: {
        backgroundColor: '#a0a0a0'
    },
    buttonLogout: {
        backgroundColor: '#DC4C4C'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16
    },
    errorMessage: {
        color: 'red',
        marginTop: 16,
        textAlign: 'center',
        fontSize: 14
    }
});

export default NoClient;
