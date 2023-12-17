import { useQuery } from '@tanstack/react-query';
import genreService, { Genre } from '../services/genreService';
import genres from '../data/genres';
import { fetchResponse } from '../services/api_client';



const useGenres = () => {

    return useQuery<fetchResponse<Genre>,Error>({
        queryKey:['Genres'],
        queryFn:genreService.getAll,
        staleTime: 24 * 60 * 60 * 1000, //24h 
        initialData: {count:genres.length , next: null , results:genres},
    })
}
export default useGenres;