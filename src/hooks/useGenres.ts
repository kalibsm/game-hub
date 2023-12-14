import { useQuery } from '@tanstack/react-query';
import genreService, { Genre } from '../services/genreService';
import genres from '../data/genres';



const useGenres = () => {

    return useQuery<Genre[],Error>({
        queryKey:['Genres'],
        queryFn:()=> genreService.getAll(),
        staleTime: 24 * 60 * 60 * 1000, //24h 
        initialData: genres,
    })
}
export default useGenres;