import ApiClient from "./api_client"

export interface GameDetails {
    id: number ,
    slug: string,
    name: string,
    description_raw: string
}


export default new ApiClient<GameDetails>('/games')