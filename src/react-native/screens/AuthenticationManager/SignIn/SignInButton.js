import { StyleSheet } from "react-native";
import { Button } from '@rneui/themed';

const SignInButton = ({ onPress }) => {
    return (
        <Button title="Login" buttonStyle={styles.control} onPress={onPress} />
    );
}

export default SignInButton;

const styles = StyleSheet.create({
    control: {
        marginBottom: 20
    },
});
