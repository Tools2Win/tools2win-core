import { useCallback, useState } from 'react';
import * as api from '../api';

const useApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const apiRequest = useCallback(async (requestType, objectType, data, params) => {
        try {
            setLoading(true);
            const responseData = await api.default[requestType](objectType, data, params);
            console.log(responseData)
            return responseData;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const get = useCallback((objectType, params) => apiRequest('get', objectType, undefined, params), [apiRequest]);
    const post = useCallback((objectType, data) => apiRequest('post', objectType, data), [apiRequest]);
    const put = useCallback((objectType, data) => apiRequest('put', objectType, data), [apiRequest]);
    const deleteItem = useCallback((objectType, data) => apiRequest('delete', objectType, data), [apiRequest]);

    return { get, post, put, delete: deleteItem, loading, error };
};

export default useApi;
