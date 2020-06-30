import axios from 'axios';

export default ArticlesApi = {
    getAllMovies: () => getAllMovies(),
}

const getAllMovies = async () => {
    let response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=ac585ef51d3d9d52b094d04e82911a9a&language=en-US&page=1');
    return response.data.results;
}