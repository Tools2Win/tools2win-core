import { useCubeQuery } from '@cubejs-client/react';

const useCubeData = (query) => {
    return useCubeQuery(query);
};

export default useCubeData;