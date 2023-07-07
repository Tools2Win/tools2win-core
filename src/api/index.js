// index.js
import { auth } from "../firebase";

const BASE_URL = 'https://tools2win-api-v3.azurewebsites.net/api';

const execute = async (httpMethod, apiMethod, objectType, data, params) => {
    console.log("OOOOOOO")
    let url = `${BASE_URL}/${apiMethod}/${objectType}`;

    if (params) {
        const queryParameters = new URLSearchParams(params).toString();
        url = `${url}?${queryParameters}`;
    }

    const user = auth.currentUser;

    if (!user) {
        throw new Error('No user is logged in.');
    }

    const token = await user.getIdToken();

    const options = {
        method: httpMethod,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : undefined,
    };

    const response = await fetch(url, options);
    const responseText = await response.text();

    if (response.ok) {
        return responseText ? JSON.parse(responseText) : {};
    } else {
        const error = new Error(responseText);
        error.status = response.status;
        throw error;
    }
};

export default {
    get: (apiMethod, objectType, params) => execute('GET', apiMethod, objectType, undefined, params),
    post: (apiMethod, objectType, data) => execute('POST', apiMethod, objectType, data),
    put: (apiMethod, objectType, data) => execute('PUT', apiMethod, objectType, data),
    delete: (apiMethod, objectType, data) => execute('DELETE', apiMethod, objectType, data),
};
