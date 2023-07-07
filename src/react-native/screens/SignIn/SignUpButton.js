import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const SignUpText = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.signUpText}>New User? Sign Up</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    signUpText: {
        marginTop: 20,
        textAlign: 'center',
        color: '#2a7bff',
    },
});

export default SignUpText;
