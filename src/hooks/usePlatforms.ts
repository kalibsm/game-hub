import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import platformService, { Platform } from '../services/platformService';
import { fetchResponse } from '../services/api_client';

const usePlatforms = () => {

    return useQuery<fetchResponse<Platform> , Error>({
        queryKey:['platforms'],
        queryFn:platformService.getAll,
        staleTime: 24 * 60 * 60 * 1000, //24h
        initialData:{count:platforms.length , next: null , results:platforms}
    })
};

export default usePlatforms;