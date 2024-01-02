import { useQuery } from "@tanstack/react-query";
import TrailerService, { Trailer } from "../services/TrailerService";
import { fetchResponse } from "../services/api_client";

const useTrailer = (id: number) => {
    return useQuery<fetchResponse<Trailer> , Error>({
        queryKey: ['trailer', id],
        queryFn: () => TrailerService.getElement(id),
        


    })
}

export default useTrailer;