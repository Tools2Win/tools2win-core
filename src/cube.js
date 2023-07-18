import cubejs from '@cubejs-client/core';
import * as api from './api';

const CUBEJS_API_URL = 'https://peaceful-condor.aws-us-east-1.cubecloudapp.dev/cubejs-api/v1';

let apiTokenPromise;

export default cube = cubejs(
    () => {
        if (!apiTokenPromise) {
            apiTokenPromise = api.default.get('cubejsjwt')
                .then((r) => r.token);
        }
        return apiTokenPromise;
    },
    { apiUrl: CUBEJS_API_URL }
);