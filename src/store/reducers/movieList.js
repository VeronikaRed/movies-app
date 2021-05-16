import * as types from '../types';

const initialState = {
    movieList: []
};

const addFavoriteMovie = (state, payload) => {
    const { movie } = payload;
    const { movieList } = state;
    movieList.push(movie);
    return {
        ...state,
        movieList: movieList
    };
};

const removeFavoriteMovie = (state, payload) => {
    const { movieArray } = payload;
    return {
        ...state,
        movieList: movieArray
    };
};

export const movieListReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.ADD_FAVORITE_MOVIE:
            return addFavoriteMovie(state, payload);

        case types.REMOVE_FAVORITE_MOVIE:
            return removeFavoriteMovie(state, payload);

        default:
            return state;
    }
};
