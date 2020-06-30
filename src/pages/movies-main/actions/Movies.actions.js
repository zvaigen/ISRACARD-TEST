import * as actionsType from './Movies.actionsTypes';
import MoviesRepository from '../../../Repository/MoviesRepository';

export const getAllMovies = () => {
  return dispatch => {
    dispatch({type: actionsType.GET_ALL_MOVIES});
    MoviesRepository.getAllMovies()
      .then(result => {
        dispatch({
          type: actionsType.GET_ALL_MOVIES_SUCCESS,
          result,
        });
      })
      .catch(error => {
        dispatch({
          type: actionsType.GET_ALL_MOVIES_ERROR,
          message: error.message,
        });
      });
  };
};

export const addToFavourite = (image, title, overview, rating, id) => {
  return {
    type: actionsType.SET_FAVOURITES_MOVIES,
    image,
    title,
    overview,
    rating,
    id,
  };
};

export const removeFromFavourite = id => {
  return {type: actionsType.REMOVE_FROM_FAVOURITES, id};
};

export const setSelectedMovie = (image, title, overview, rating, id) => {
  return {type: actionsType.SET_MOVIE_DATA, image, title, overview, rating, id};
};
