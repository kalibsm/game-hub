import axios from 'axios'
import { GameQuery } from '../App'


export const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'810e96d00deb4f99a0bb566787bfd2d4'
    }
})

export interface fetchResponse<T>{
    count: number,
    results : T[]
}

class ApiClient<T> {
    endpoint: string

    constructor (endpoint:string) {
        this.endpoint = endpoint
    }

    getAll = (gameQuery?: GameQuery) => {
        return axiosInstance
        .get<fetchResponse<T>>(this.endpoint,{params:
            { genres:gameQuery?.genre?.id ,
              parent_platforms:gameQuery?.platform?.id,
              ordering:gameQuery?.SortOrder,
              search:gameQuery?.searchText
            }})
        .then(res => res.data.results)
    }
}

export default ApiClient;