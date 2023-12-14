import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import platformService, { Platform } from '../services/platformService';

const usePlatforms = () => {

    return useQuery<Platform[] , Error>({
        queryKey:['platforms'],
        queryFn: ()=> platformService.getAll(),
        staleTime: 24 * 60 * 60 * 1000, //24h
        initialData:platforms
    })
};

export default usePlatforms;