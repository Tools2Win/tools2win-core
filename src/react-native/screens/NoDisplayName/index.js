import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
} from 'react-native';
import { useDisplayName } from '../../../hooks/useDisplayName';
import { auth } from '../../../firebase';

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
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Image
                source={require('../../../assets/art_displayname.jpg')}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.title}>Display Name</Text>
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
        </KeyboardAvoidingView>
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
        backgroundColor: '#F25929',
        padding: 10,
        alignItems: 'center',
        borderRadius: 4,
        marginBottom: 10,
    },
    logoutButton: {
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

export default NoDisplayName;