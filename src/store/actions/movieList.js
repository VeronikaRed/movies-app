import * as types from '../types';

export const addFavoriteMovie = movie => {
    return {
        type: types.ADD_FAVORITE_MOVIE,
        payload: {
            movie
        }
    };
};

export const removeFavoriteMovie = movieArray => {
    return {
        type: types.REMOVE_FAVORITE_MOVIE,
        payload: {
            movieArray
        }
    };
};
