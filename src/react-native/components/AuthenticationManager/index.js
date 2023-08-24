import { createStackNavigator } from '@react-navigation/stack';
import useAuth from '../../../hooks/useAuth';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from '../../screens/SignIn';

const Stack = createStackNavigator();

const AuthenticationManager = ({ children }) => {
    return null;
    const { loading, user, signOut } = useAuth();

    if (loading) return null;

    if (!user) {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Signin" component={SignIn} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

    return null;

};

export default AuthenticationManager;