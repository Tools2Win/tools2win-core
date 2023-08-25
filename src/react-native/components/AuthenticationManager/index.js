import { createStackNavigator } from '@react-navigation/stack';
import useAuth from '../../../hooks/useAuth';
import { Text } from 'react-native'
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

    return <Text>NOOOOOOO!</Text>




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