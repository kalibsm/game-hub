import { Game } from "./GameService"
import ApiClient from "./api_client"




export default new ApiClient<Game>('/games')