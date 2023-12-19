import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import genres from '../data/genres';
import { fetchResponse } from '../services/api_client';
import genreService, { Genre } from '../services/genreService';



const useGenres = () => {

    return useQuery<fetchResponse<Genre>,Error>({
        queryKey:['Genres'],
        queryFn:genreService.getAll,
        staleTime: ms('24h'),
        initialData: genres,
    })
}
export default useGenres;