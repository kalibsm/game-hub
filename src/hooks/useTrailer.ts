import { useQuery } from "@tanstack/react-query";
import Trailer  from "../entities/Trailer";
import ApiClient, { fetchResponse } from "../services/api_client";

const useTrailer = (id: number) => {
    const apiClient = new ApiClient<Trailer>(`/games/${id}/movies`)
    return useQuery<fetchResponse<Trailer> , Error>({
        queryKey: ['trailer', id],
        queryFn: apiClient.getAll,
        


    })
}

export default useTrailer;