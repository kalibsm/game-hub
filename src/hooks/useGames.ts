import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import GameService, { Game } from "../services/GameService";
import { fetchResponse } from "../services/api_client";
import useGameQueryStore from "../stores/gameQueryStore";



const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery)
  
  return useInfiniteQuery<fetchResponse<Game> , Error>({
    queryKey:['games',gameQuery],
    queryFn:({pageParam = 1})=> GameService.getAll({
      params:
      { genres:gameQuery.genre_id ,
        parent_platforms:gameQuery.platform_id,
        ordering:gameQuery.sortOrder,
        search:gameQuery.searchText,
        page: pageParam
        
      }}),
    getNextPageParam: (lastPage , allPages) => {
      
      return  lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h')
    
  })
}

export default useGames;