import cubejs from '@cubejs-client/core';
import * as api from './api';

const CUBEJS_API_URL = 'https://peaceful-condor.aws-us-east-1.cubecloudapp.dev/cubejs-api/v1';
//const CUBEJS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODQ4Njg1MjV9.OOpFYQpPirzs7UffePGgJAFsfxnAKp-CWgPva785AEo';

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