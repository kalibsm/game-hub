import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import GameService, { Game } from "../services/GameService";
import { fetchResponse } from "../services/api_client";



const useGames = (gameQuery : GameQuery ) => {
  return useInfiniteQuery<fetchResponse<Game> , Error>({
    queryKey:['games',gameQuery],
    queryFn:({pageParam = 1})=> GameService.getAll({
      params:
      { genres:gameQuery.genre_id ,
        parent_platforms:gameQuery.platform_id,
        ordering:gameQuery.SortOrder,
        search:gameQuery.searchText,
        page: pageParam
        
      }}),
    getNextPageParam: (lastPage , allPages) => {
      
      return  lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000 //24h
    
  })
}

export default useGames;