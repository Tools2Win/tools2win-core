import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SeparatorWithText = ({ text }) => (
    <View style={styles.separatorContainer}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>{text}</Text>
        <View style={styles.separatorLine} />
    </View>
);

const styles = StyleSheet.create({
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    separatorLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
    separatorText: {
        marginHorizontal: 10,
        color: '#888',
    },
});

export default SeparatorWithText;
