import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import GameService, { Game } from "../services/GameService";




const useGames = (gameQuery : GameQuery) => {
  return useQuery<Game[] , Error>({
    queryKey:['games',gameQuery],
    queryFn:()=> GameService.getAll({
      params:
      { genres:gameQuery.genre?.id ,
        parent_platforms:gameQuery.platform?.id,
        ordering:gameQuery.SortOrder,
        search:gameQuery.searchText
      }})
  })
}

export default useGames;