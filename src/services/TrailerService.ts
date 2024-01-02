import ApiClient from "./api_client"


export interface Trailer {
    id: number,
    name: string,
    preview: string,
    data: {480:string , max:string}
}

export default new ApiClient<Trailer>('/games')