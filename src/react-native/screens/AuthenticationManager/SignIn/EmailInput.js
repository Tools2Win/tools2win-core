import { Input } from "@rneui/themed";
import Icon from 'react-native-vector-icons/FontAwesome';

const EmailInput = ({ value, onChangeText }) => (
    <Input
        placeholder='Email'
        value={value}
        onChangeText={onChangeText}
        leftIcon={<Icon name='envelope' size={16} />}
    />
);

export default EmailInput;