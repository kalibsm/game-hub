import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'810e96d00deb4f99a0bb566787bfd2d4'
    }
})