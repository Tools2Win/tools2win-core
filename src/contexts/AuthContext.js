import { createContext } from 'react';

const AuthContext = createContext({
    user: null,
    signOut: () => { }
});

export default AuthContext;
