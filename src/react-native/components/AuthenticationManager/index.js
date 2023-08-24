import { createStackNavigator } from '@react-navigation/stack';
import useAuth from '../../../hooks/useAuth';
import { NavigationContainer } from '@react-navigation/native';
import Acknowledgment from '../../screens/Acknowledgment';
import NoDisplayName from '../../screens/NoDisplayName';
import NoClient from '../../screens/NoClient';
import SalesmanSelection from '../../screens/SalesmanSelection';
import SignIn from '../../screens/SignIn';
import ForgotPassword from '../../screens/ForgotPassword';
import SignUp from '../../screens/SignUp';
import AuthContext from '../../../contexts/AuthContext';

const Stack = createStackNavigator();

const AuthenticationManager = ({ children }) => {
    return children;
};

export default AuthenticationManager;