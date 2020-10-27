import Axios from "axios";

export function getDailyTranding ()  {
    Axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=5757c3ed544bf433eda60ef7b46c7e03')
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}