import useAuth from '../../../hooks/useAuth';
// import Acknowledgment from '../../screens/Acknowledgment';
// import NoDisplayName from '../../screens/NoDisplayName';
// import NoClient from '../../screens/NoClient';
// import SalesmanSelection from '../../screens/SalesmanSelection';
import SignIn from '../../pages/SignIn';
// import ForgotPassword from '../../screens/ForgotPassword';
// import SignUp from '../../screens/SignUp';
// import AuthContext from '../../../contexts/AuthContext';

const AuthenticationManager = ({ children }) => {
    const { loading, user, signOut } = useAuth();

    if (loading) return null;

    if (!user) return <SignIn />;
};

export default AuthenticationManager;
