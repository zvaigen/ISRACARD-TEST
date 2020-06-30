import * as actionTypes from '../actions/Movies.actionsTypes.js';

const INITIAL_STATE = {
  moviesArr: null,
  moviePoster: null,
  movieTitle: null,
  movieOverview: null,
  movieRating: null,
  movieId: null,
  favouritesArr: {},
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_MOVIES:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_ALL_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        moviesArr: action.result,
      };

    case actionTypes.GET_ALL_MOVIES_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case actionTypes.SET_MOVIE_DATA:
      return {
        ...state,
        moviePoster: action.image,
        movieTitle: action.title,
        movieOverview: action.overview,
        movieRating: action.rating,
        movieId: action.id,
      };

    case actionTypes.SET_FAVOURITES_MOVIES: {
      const favouritesArr = state.favouritesArr;

      favouritesArr[action.id] = {
        moviePoster: action.image,
        movieTitle: action.title,
        movieOverview: action.overview,
        movieRating: action.rating,
        movieId: action.id,
      };
      return {
        ...state,
        favouritesArr,
      };
    }

    case actionTypes.REMOVE_FROM_FAVOURITES:
      const favouritesArr = state.favouritesArr;

      delete favouritesArr[action.id];

      return {
        ...state,
        favouritesArr,
      };

    default:
      return state;
  }
};
