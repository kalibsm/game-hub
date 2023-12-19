import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import platforms from '../data/platforms';
import { fetchResponse } from '../services/api_client';
import platformService, { Platform } from '../services/platformService';

const usePlatforms = () => {

    return useQuery<fetchResponse<Platform> , Error>({
        queryKey:['platforms'],
        queryFn:platformService.getAll,
        staleTime: ms('24h'),
        initialData: platforms
    })
};

export default usePlatforms;