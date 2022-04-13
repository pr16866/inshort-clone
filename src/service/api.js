import axios from "axios";


export const getnews =async(page ) => {
    try {

        return axios.get(`https://inshortsapi.vercel.app/news?category=${page}`);
    } catch (er) {
        console.log(er);
    }
}