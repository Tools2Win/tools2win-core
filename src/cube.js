import cubejs from '@cubejs-client/core';
import * as api from './api';

const CUBEJS_API_URL = '70.167.38.129:4000/cubejs-api/v1';

let apiTokenPromise;

const cube = cubejs(
    () => {
        if (!apiTokenPromise) {
            apiTokenPromise = api.default.get('cubejsjwt')
                .then((r) => r.token);
        }
        return apiTokenPromise;
    },
    { apiUrl: CUBEJS_API_URL }
);

export default cube;