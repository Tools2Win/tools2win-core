
import { createStackNavigator } from '@react-navigation/stack';
import useAuth from 'tools2win-core/src/hooks/useAuth';
import { NavigationContainer } from '@react-navigation/native';
import Acknowledgment from 'tools2win-core/src/react-native/screens/Acknowledgment';
import NoDisplayName from 'tools2win-core/src/react-native/screens/NoDisplayName';
import NoClient from 'tools2win-core/src/react-native/screens/NoClient';
import SalesmanSelection from 'tools2win-core/src/react-native/screens/SalesmanSelection';
import SignIn from 'tools2win-core/src/react-native/screens/SignIn';
import ForgotPassword from 'tools2win-core/src/react-native/screens/ForgotPassword';
import SignUp from 'tools2win-core/src/react-native/screens/SignUp';
import AuthContext from 'tools2win-core/src/contexts/AuthContext';
import colors from 'tools2win-core/src/themes/colors';
import { ThemeProvider, createTheme } from '@rneui/themed';

const theme = createTheme({
    lightColors: {
        primary: colors.primary.main,
        secondary: colors.secondary.main,
        background: colors.background.default,
    },
    mode: 'light',
    components: {
        Text: {
            h4Style: {
                color: colors.text.primary
            }
        }
    }
})

const Stack = createStackNavigator();

const AuthenticationManager = ({ children }) => {
    return null;
    const { loading, user, signOut } = useAuth();

    const userHasAllowedRole = (allowedRoles) => {
        if (!allowedRoles) return true;
        return allowedRoles.some(allowedRole => user.roles?.includes(allowedRole));
    };

    if (loading) return null;

    if (!user) {
        return (
            <ThemeProvider theme={theme}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Signin" component={SignIn} options={{ headerShown: false }} />
                        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
                        <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }} />
                    </Stack.Navigator>
                </NavigationContainer>
            </ThemeProvider>
        );
    }

    if (!user.emailVerified) return <ThemeProvider theme={theme}><Acknowledgment /></ThemeProvider>;
    if (!user.displayName) return <ThemeProvider theme={theme}><NoDisplayName /></ThemeProvider>;
    if (!user.clientID) return <ThemeProvider theme={theme}><NoClient /></ThemeProvider>;
    if (!user.salesmanCode) return <ThemeProvider theme={theme}><SalesmanSelection /></ThemeProvider>;

    return (
        <AuthContext.Provider value={{ user, signOut, userHasAllowedRole }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthenticationManager;