import { createStackNavigator } from '@react-navigation/stack';
// import useAuth from '../../../hooks/useAuth';
// import { NavigationContainer } from '@react-navigation/native';
// import Acknowledgment from '../../screens/Acknowledgment';
// import NoDisplayName from '../../screens/NoDisplayName';
import NoClient from '../../screens/NoClient';
import SalesmanSelection from '../../screens/SalesmanSelection';
import SignIn from '../../screens/SignIn';
import ForgotPassword from '../../screens/ForgotPassword';
import SignUp from '../../screens/SignUp';
import AuthContext from '../../../contexts/AuthContext';

// const Stack = createStackNavigator();

const AuthenticationManager = ({ children }) => {
    //const { loading, user, signOut } = useAuth();

    //if (loading) return null;

    return null;

    // if (!user) {
    //     return (
    //         <NavigationContainer>
    //             <Stack.Navigator>
    //                 <Stack.Screen name="Signin" component={SignIn} options={{ headerShown: false }} />
    //                 <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
    //                 <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }} />
    //             </Stack.Navigator>
    //         </NavigationContainer>
    //     );
    // }

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