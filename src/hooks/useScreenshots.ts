import { useQuery } from "@tanstack/react-query"
import ApiClient, { fetchResponse } from "../services/api_client"
import  screenshot  from "../entities/screenshot"

const useScreenshots = (game_pk : string) => {
    const apiClient = new ApiClient<screenshot>(`/games/${game_pk}/screenshots`);
    return useQuery<fetchResponse<screenshot> , Error>({
        queryKey:['screenshot' , game_pk],
        queryFn: apiClient.getAll,
    })
}

export default useScreenshots;