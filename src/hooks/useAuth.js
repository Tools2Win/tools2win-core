import { useState, useEffect } from 'react';
import { auth } from '../firebase';

const useAuth = () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const signOut = async () => {
        await auth.signOut();
    }

    useEffect(() => {
        return auth.onIdTokenChanged(async user => {
            console.log(user)
            if (user) {
                const idTokenResult = await user.getIdTokenResult();
                const newUser = {
                    ...user,
                    clientID: idTokenResult.claims.clientID,
                    clientName: idTokenResult.claims.clientName,
                    salesmanCode: idTokenResult.claims.salesmanCode,
                    roles: idTokenResult.claims.roles,
                    emailVerified: idTokenResult.claims.email_verified,
                    displayName: idTokenResult.claims.name
                };
                setUser(newUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        });
    }, []);

    return { loading, user, signOut };
};

export default useAuth;
