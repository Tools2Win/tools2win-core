import { useState } from 'react';
import { create, use } from '../api';
import { apiConfigs } from '../api/apiConfigs';

export const useInviteCode = () => {
    const [inviteCode, setInviteCode] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createInviteCode = async () => {
        setLoading(true);
        try {
            const response = await create(apiConfigs.inviteCode.create);
            setInviteCode(response);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const consumeInviteCode = async (inviteCode) => {
        setLoading(true);
        try {
            await use(apiConfigs.inviteCode.use, { Code: inviteCode });
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return {
        inviteCode,
        loading,
        error,
        createInviteCode,
        consumeInviteCode
    };
};
