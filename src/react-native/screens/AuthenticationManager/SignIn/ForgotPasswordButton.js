import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';

const ForgotPasswordButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text>Forgot Password?</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 10
    },
});

export default ForgotPasswordButton;
