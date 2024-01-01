import { useQuery } from "@tanstack/react-query";
import GameDetailService from "../services/GameDetailService";
import { Game } from "../services/GameService";

const useGameDetails = (slug : string) => {
    return useQuery<Game ,Error>({
        queryKey: ['games' , slug ],
        queryFn: () => GameDetailService.getByID(slug)
    })
}
export default useGameDetails;