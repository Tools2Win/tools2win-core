import { useState, useEffect } from 'react';
import { get, merge } from '../api';
import { apiConfigs } from '../api/apiConfigs';
import { auth } from '../firebase';

export const useSalesmanSelection = () => {
    const [salesmen, setSalesmen] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getSalesmen = async () => {
        setLoading(true);
        try {
            const response = await get(apiConfigs.salesman.get);
            setSalesmen(response);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const selectSalesman = async (SalesmanCode) => {
        setLoading(true);
        try {
            await merge(apiConfigs.userSalesman.merge, { ID: SalesmanCode });
            auth.currentUser.getIdTokenResult(true)
        } catch (err) {
            console.log(err)
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getSalesmen();
    }, []);

    return {
        salesmen,
        loading,
        error,
        selectSalesman
    };
};