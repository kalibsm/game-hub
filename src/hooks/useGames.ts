import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import GameService, { Game } from "../services/GameService";




const useGames = (gameQuery : GameQuery) => {
  return useQuery<Game[] , Error>({
    queryKey:['games',gameQuery],
    queryFn:()=> GameService.getAll(gameQuery)
  })
}

export default useGames;