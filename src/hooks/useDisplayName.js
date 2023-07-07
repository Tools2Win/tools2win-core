import { useState } from 'react';
import { put } from '../api';
import { apiConfigs } from '../api/apiConfigs';
import { auth } from '../firebase';

export const useDisplayName = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateDisplayName = async (displayName) => {
        setLoading(true);
        try {
            await put(apiConfigs.displayName.put, displayName);
            await auth.currentUser.getIdTokenResult(true);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        updateDisplayName,
        loading,
        error
    };
};
