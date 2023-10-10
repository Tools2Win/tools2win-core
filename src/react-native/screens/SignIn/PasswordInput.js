import { StyleSheet } from "react-native";
import { Input } from "@rneui/themed";
import Icon from 'react-native-vector-icons/FontAwesome';

const PasswordInput = ({ value, onChangeText }) => (
    <Input
        placeholder='Password'
        containerStyle={styles.control}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={true}
        leftIcon={<Icon name='key' size={16} />}
    />
);

export default PasswordInput;

const styles = StyleSheet.create({
    control: {
        marginBottom: 20
    },
});