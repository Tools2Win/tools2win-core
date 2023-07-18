import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const ForgotPasswordButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 10
    },
    forgotPasswordText: {
        color: '#1877F2',
    },
});

export default ForgotPasswordButton;