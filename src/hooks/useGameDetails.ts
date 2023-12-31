import { useQuery } from "@tanstack/react-query";
import GameDetailService, { GameDetails } from "../services/GameDetailService";

const useGameDetails = (slug : string) => {
    return useQuery<GameDetails ,Error>({
        queryKey: ['games' , slug ],
        queryFn: () => GameDetailService.getByID(slug)
    })
}
export default useGameDetails;