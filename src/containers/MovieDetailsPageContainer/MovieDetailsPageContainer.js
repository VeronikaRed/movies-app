import PT from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { MovieDetailsPage } from '../../pages';
import { addFavoriteMovie } from '../../store/actions';

const { REACT_APP_API_URL, REACT_APP_MOVIE_API_KEY } = process.env;

const authSelector = state => !!state.auth.idToken;
const favoriteMovieSelector = state => state.favorite.movieList;

export const MovieDetailsPageContainer = ({
    movies,
    popularMovies,
    as: Component = MovieDetailsPage,
    ...other
}) => {
    const [movie, setMovie] = useState(null);
    const [similarMovies, setSimilarMovies] = useState([]);
    const { movieId } = useParams();
    const history = useHistory();

    const isAuthenticated = useSelector(authSelector);
    const list = useSelector(favoriteMovieSelector);

    const dispatch = useDispatch();

    const handleAddFavorite = () => {
        if (isAuthenticated) {
            if (!list.find(item => item.id === movie.id)) {
                dispatch(addFavoriteMovie(movie));
            }
        } else {
            history.push('/auth');
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    useEffect(() => {
        let foundMovie = movies.find(({ id }) => id === +movieId);
        if (!foundMovie) {
            foundMovie = popularMovies.find(({ id }) => id === +movieId);
        }
        const similarMoviesUrl = `${REACT_APP_API_URL}/movie/${movieId}/similar?api_key=${REACT_APP_MOVIE_API_KEY}`;

        if (foundMovie) {
            (async () => {
                try {
                    const {
                        data: { results }
                    } = await axios.get(similarMoviesUrl);
                    setMovie(foundMovie);
                    setSimilarMovies(results.slice(0, 5));
                } catch (e) {
                    console.error(e);
                }
            })();
            return;
        }

        const movieUrl = `${REACT_APP_API_URL}/movie/${movieId}?api_key=${REACT_APP_MOVIE_API_KEY}`;

        (async () => {
            try {
                const [movieResponse, similarMovieResponse] = await Promise.all(
                    [axios.get(movieUrl), axios.get(similarMoviesUrl)]
                );

                const { data: movieDetails } = movieResponse;
                const {
                    data: { results }
                } = similarMovieResponse;

                setMovie(movieDetails);
                setSimilarMovies(results.slice(0, 5));
            } catch (e) {
                console.error(e);
                history.push('/');
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieId]);

    if (!movie) return null;

    return (
        <Component
            movie={movie}
            similarMovies={similarMovies}
            onAddFavorite={handleAddFavorite}
            {...other}
        />
    );
};

MovieDetailsPageContainer.propTypes = {
    as: PT.elementType,
    movies: PT.arrayOf(
        PT.shape({
            id: PT.number.isRequired
        })
    ),
    popularMovies: PT.arrayOf(
        PT.shape({
            id: PT.number.isRequired
        })
    )
};
