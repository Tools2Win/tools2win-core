import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const SignInButton = ({ onPress }) => (
    <Button title="Login" buttonStyle={styles.control} onPress={onPress} />
);

export default SignInButton;

const styles = StyleSheet.create({
    control: {
        marginBottom: 20
    },
});
