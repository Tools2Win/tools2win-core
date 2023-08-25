import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Test from '../../components/Test';

const Stack = createStackNavigator();

const AuthenticationManager = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Test" component={Test} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AuthenticationManager;