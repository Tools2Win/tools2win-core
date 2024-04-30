import React, { useState } from 'react';
import useAuth from 'tools2win-core/src/hooks/useAuth';
import Acknowledgment from './Acknowledgment';
import NoDisplayName from './NoDisplayName';
import NoClient from './NoClient';
import SalesmanSelection from './SalesmanSelection';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';
import SignUp from './SignUp';
import AuthContext from 'tools2win-core/src/contexts/AuthContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import colors from '../../../themes/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary.main
        },
        secondary: {
            main: colors.secondary.main
        },
    }
})

const AuthenticationManager = ({ children }) => {
    const { loading, user, signOut, refreshAuth } = useAuth();
    const [view, setView] = useState('login');

    if (loading) return null;

    if (!user) {
        switch (view) {
            case 'forgotPassword':
                return <ThemeProvider theme={theme}><ForgotPassword goBack={() => setView('login')} /></ThemeProvider>;
            case 'signUp':
                return <ThemeProvider theme={theme}><SignUp goBack={() => setView('login')} />;</ThemeProvider>
            case 'login':
            default:
                return (
                    <ThemeProvider theme={theme}>
                        <SignIn
                            onForgotPasswordClick={() => setView('forgotPassword')}
                            onSignUpClick={() => setView('signUp')}
                        />
                    </ThemeProvider>

                );
        }
    }

    if (!user.emailVerified) return <ThemeProvider theme={theme}><Acknowledgment /></ThemeProvider>;
    if (!user.displayName) return <ThemeProvider theme={theme}><NoDisplayName /></ThemeProvider>;
    if (!user.clientID) return <ThemeProvider theme={theme}><NoClient /></ThemeProvider>;
    if (!user.salesmanCode) return <ThemeProvider theme={theme}><SalesmanSelection /></ThemeProvider>;

    window.Intercom('boot', {
        app_id: 'w805oscg',
    })

    return (
        <AuthContext.Provider value={{ user, refreshAuth, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthenticationManager;
