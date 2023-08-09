import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Acknowledgment from '../../pages/Acknowledgment';
// import NoDisplayName from '../../screens/NoDisplayName';
import NoClient from '../../pages/NoClient';
import SalesmanSelection from '../../pages/SalesmanSelection';
import SignIn from '../../pages/SignIn';
import ForgotPassword from '../../pages/ForgotPassword';
import SignUp from '../../pages/SignUp';
import AuthContext from '../../../contexts/AuthContext';

const AuthenticationManager = ({ children }) => {
    const { loading, user, signOut, refreshAuth } = useAuth();
    const [view, setView] = useState('login');

    if (loading) return null;

    if (!user) {
        switch (view) {
            case 'forgotPassword':
                return <ForgotPassword goBack={() => setView('login')} />;
            case 'signUp':
                return <SignUp goBack={() => setView('login')} />;
            case 'login':
            default:
                return (
                    <SignIn
                        onForgotPasswordClick={() => setView('forgotPassword')}
                        onSignUpClick={() => setView('signUp')}
                    />
                );
        }
    }

    if (!user.emailVerified) return <Acknowledgment />;
    if (!user.clientID) return <NoClient />;
    if (!user.salesmanCode) return <SalesmanSelection />;

    return (
        <AuthContext.Provider value={{ user, signOut, refreshAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthenticationManager;
