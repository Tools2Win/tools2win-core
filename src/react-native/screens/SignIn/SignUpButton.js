import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';

const SignUpText = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.signUpText}>New User? Sign Up</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    signUpText: {
        marginTop: 20,
        textAlign: 'center',
    },
});

export default SignUpText;
