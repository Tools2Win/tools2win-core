import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from 'tools2win-core';
import AuthStackNavigator from '../../navigators/AuthStack';
import Acknowledgment from '../../screens/Acknowledgment';
import NoDisplayName from '../../screens/NoDisplayName';
import NoClient from '../../screens/NoClient';
import SalesmanSelection from '../../screens/SalesmanSelection';

const AuthenticationManager = ({ children }) => {
    const { loading, user } = useAuth();

    if (loading) return null;

    if (!user) {
        return (
            <NavigationContainer>
                <AuthStackNavigator />
            </NavigationContainer>
        );
    }

    if (!user.emailVerified) return <Acknowledgment />;
    if (!user.displayName) return <NoDisplayName />;
    if (!user.clientID) return <NoClient />;
    if (!user.salesmanCode) return <SalesmanSelection />;

    return children;
};

export default AuthenticationManager;