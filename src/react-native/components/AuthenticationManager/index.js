import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import useAuth from '../../../hooks/useAuth';
import { Text } from 'react-native'
import Test from '../../components/Test'
//import Acknowledgment from '../../screens/Acknowledgment';
//import NoDisplayName from '../../screens/NoDisplayName';
//import NoClient from '../../screens/NoClient';
//import SalesmanSelection from '../../screens/SalesmanSelection';
// import ForgotPassword from '../../screens/ForgotPassword';
// import SignUp from '../../screens/SignUp';
//import AuthContext from '../../../contexts/AuthContext';

const Stack = createStackNavigator();

const AuthenticationManager = ({ children }) => {
    const { loading, user, signOut } = useAuth();

    if (loading) return <Text>asdfjkl;</Text>;

    if (!user) {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Test" component={Test} options={{ headerShown: false }} />
                    {/* <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} /> */}
                    {/* <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }} /> */}
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
    return <Text>Interest</Text>;

    // if (!user.emailVerified) return <Acknowledgment />;
    // if (!user.displayName) return <NoDisplayName />;
    // if (!user.clientID) return <NoClient />;
    // if (!user.salesmanCode) return <SalesmanSelection />;

    // return (
    //     <AuthContext.Provider value={{ user, signOut }}>
    //         {children}
    //     </AuthContext.Provider>
    // );
};

export default AuthenticationManager;