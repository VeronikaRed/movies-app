import PT from 'prop-types';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MovieDetailsPage } from '../../pages';

const { REACT_APP_API_URL, REACT_APP_MOVIE_API_KEY } = process.env;

export const MovieDetailsPageContainer = ({
    movies,
    as: Component = MovieDetailsPage,
    ...other
}) => {
    const [movie, setMovie] = useState(null);
    const [similarMovies, setSimilarMovies] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const foundMovie = movies.find(({ id }) => id === +movieId);
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
                const [
                    movieResponse,
                    similarMovieResponse
                ] = await Promise.all([
                    axios.get(movieUrl),
                    axios.get(similarMoviesUrl)
                ]);

                const { data: movieDetails } = movieResponse;
                const {
                    data: { results }
                } = similarMovieResponse;

                setMovie(movieDetails);
                setSimilarMovies(results.slice(0, 5));
            } catch (e) {
                console.error(e);
            }
        })();
    }, [movieId]);

    if (!movie || !similarMovies.length) return null;

    return <Component movie={movie} similarMovies={similarMovies} {...other} />;
};

MovieDetailsPageContainer.propTypes = {
    as: PT.elementType,
    movies: PT.arrayOf(
        PT.shape({
            id: PT.number.isRequired
        })
    ).isRequired
};
