import { Publisher } from "../entities/Publisher";
import ApiClient from "./api_client";
import { Genre } from "./genreService";
import { Platform } from "./platformService";

export interface Game {
    id: number,
    slug: string,
    name: string,
    description_raw: string
    background_image:string,
    parent_platforms:{platform:Platform}[],
    metacritic:number,
    rating_top:number,
    genres:Genre[]
    publishers:Publisher[]
  }

  export default new ApiClient<Game>('/games');