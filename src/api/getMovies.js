import Axios from "axios";

export const getMovies = () => {
    Axios.get('https://api.themoviedb.org/3/movie/550?api_key=5757c3ed544bf433eda60ef7b46c7e03')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}