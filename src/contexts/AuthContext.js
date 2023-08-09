import { createContext } from 'react';

const AuthContext = createContext({
    user: null,
    signOut: () => { },
    refreshAuth: () => { }
});

export default AuthContext;
