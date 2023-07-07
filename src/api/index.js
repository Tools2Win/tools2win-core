import { auth } from "tools2win-core";

const BASE_URL = 'https://tools2win-api-v3.azurewebsites.net/api';

const fetchFromApi = async (token, httpMethod, apiMethod, config, data, params) => {
    let url = `${BASE_URL}/${apiMethod}/${config.objectType}`;

    if (params) {
        const queryParameters = new URLSearchParams(params).toString();
        url = `${url}?${queryParameters}`;
    }

    const options = {
        method: httpMethod.toUpperCase(),
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    };

    if (data !== null) {
        options.body = JSON.stringify(data);
    }
    const response = await fetch(url, options);
    const responseText = await response.text();
    if (response.ok) {
        return responseText ? JSON.parse(responseText) : {};
    } else {
        const error = new Error(responseText); // Create an error object with the message
        error.status = response.status; // Set the status code
        throw error;
    }
}

const execute = async (config, httpMethod, apiMethod, data, params) => {
    const user = auth.currentUser;
    if (!user) {
        // handle the case when there is no user logged in
        throw new Error('No user is logged in.');
    }

    const token = await user.getIdToken();
    return fetchFromApi(token, httpMethod, apiMethod, config, data, params);
};

export const get = (config, params) => execute(config, 'GET', 'get', undefined, params);
export const merge = (config, data) => execute(config, 'POST', 'merge', data);
export const create = (config, data) => execute(config, 'POST', 'create', data);
export const remove = (config, data) => execute(config, 'DELETE', 'delete', data);
export const use = (config, data) => execute(config, 'POST', 'use', data);
export const put = (config, data) => execute(config, 'PUT', 'put', data);