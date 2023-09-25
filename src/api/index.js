// index.js
import { auth } from "../firebase";

const BASE_URL = 'https://tools2win-api-v4.azurewebsites.net/api';

const execute = async (httpMethod, resource, data, params) => {
    let url = `${BASE_URL}/${resource}`;

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

    console.log(token)

    const response = await fetch(url, options);
    const responseText = await response.text();

    if (response.ok) {
        let responseData;
        try {
            responseData = responseText ? JSON.parse(responseText) : {};
        } catch (error) {
            responseData = responseText;
        }
        return responseData;
    } else {
        const error = new Error(responseText);
        error.status = response.status;
        console.log(error)
        throw error;
    }
};

export default {
    get: (resource, data, params) => execute('GET', resource, undefined, params),
    post: (resource, data) => execute('POST', resource, data),
    put: (resource, data) => execute('PUT', resource, data),
    delete: (resource, data, params) => execute('DELETE', resource, undefined, params),
};
