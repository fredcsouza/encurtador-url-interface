import axios from 'axios'

const baseURL = "https://encurtador-api.herokuapp.com/"


export const api = axios.create({
    baseURL
    // async shorten(url: string) {
    //     const result = await axios.post(`${url_api}shorten`, {
    //         originURL: `${url}`
            
    //     })
    //     const {shortURL} = result.data
    //     return shortURL;
    // },
})