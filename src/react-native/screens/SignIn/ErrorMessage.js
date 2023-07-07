import { StyleSheet, Text, View } from "react-native";

const ErrorMessage = ({ message }) => (
    <View style={styles.error}><Text>{message}</Text></View>
);

const styles = StyleSheet.create({
    error: {
        marginBottom: 20,  // Increase space between error message and controls
        padding: 10,
        color: '#fff',
        backgroundColor: '#D54826FF',
    }
});

export default ErrorMessage;