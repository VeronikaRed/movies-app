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
    const { movieId } = useParams();

    useEffect(() => {
        const movie = movies.find(({ id }) => id === +movieId);

        if (movie) return setMovie(movie);

        const url = `${REACT_APP_API_URL}/movie/${movieId}?api_key=${REACT_APP_MOVIE_API_KEY}`;

        (async () => {
            try {
                const { data } = await axios.get(url);
                console.log(data);
                setMovie(data);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    if (!movie) return null;

    return <Component movie={movie} {...other} />;
};

MovieDetailsPageContainer.propTypes = {
    as: PT.elementType,
    movies: PT.arrayOf(
        PT.shape({
            id: PT.number.isRequired
        })
    ).isRequired
};
