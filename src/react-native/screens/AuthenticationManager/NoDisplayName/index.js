import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
} from 'react-native';
import { useDisplayName } from '../../../../hooks/useDisplayName';
import { auth } from '../../../../firebase';
import { Text, Input, Button } from '@rneui/themed';

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
                source={require('../../../../assets/art_displayname.jpg')}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text h4 style={styles.title}>Display Name</Text>
            <View style={styles.inputContainer}>
                <Input
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={setFirstName}
                />
                <Input
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={setLastName}
                />
                <Button type='solid' buttonStyle={styles.button} title='Continue' onPress={handleSubmit} />
                <Button type='outline' buttonStyle={styles.button} title='Logout' onPress={handleLogout} disabled={loading} />
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
        marginBottom: 8,
        fontWeight: 'bold'
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
    button: {
        padding: 10,
        borderRadius: 4,
        marginBottom: 10,
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