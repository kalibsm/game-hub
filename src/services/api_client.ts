import axios, { AxiosRequestConfig } from 'axios'


export const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'810e96d00deb4f99a0bb566787bfd2d4'
    }
})

export interface fetchResponse<T>{
    count: number,
    next: string | null,
    results : T[]
}

class ApiClient<T> {
    endpoint: string

    constructor (endpoint:string) {
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig ) => {
        return axiosInstance
        .get<fetchResponse<T>>(this.endpoint , config)
        .then(res => res.data)
    }

    getByID = (id : number | string) => {
        return axiosInstance 
            .get<T>(this.endpoint + '/' + id)
            .then(res => res.data);
    }
}

export default ApiClient;