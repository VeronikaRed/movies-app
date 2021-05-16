import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link, Button } from '../../components';
import { StyledWrapperCard, StyledWrapperFavoriteMovie } from './styles';
import { StyledTitle } from '../../styles';
import click from './styles/click.png';
import { removeFavoriteMovie } from '../../store/actions';

const favoriteMovieSelector = state => state.favorite.movieList;
const { REACT_APP_STORAGE_URL } = process.env;

export const FavoriteMoviePage = ({ movies, popularMovies }) => {
    const list = useSelector(favoriteMovieSelector);
    const dispatch = useDispatch();
    const [favoriteMovies, setFavoriteMovies] = useState(list);

    const handleRemoveMovie = (id, event) => {
        const res = favoriteMovies.findIndex(item => item.id === id);
        favoriteMovies.splice(res, 1);
        setFavoriteMovies(favoriteMovies.map(i => i));
        dispatch(removeFavoriteMovie(favoriteMovies));
        event.preventDefault();
    };
    return (
        <StyledWrapperFavoriteMovie>
            <StyledTitle>Favorite movie:</StyledTitle>
            <StyledWrapperCard>
                {favoriteMovies.map(({ poster_path, id, original_title }) => {
                    const posterUrl = REACT_APP_STORAGE_URL + poster_path;

                    return (
                        <Link
                            to={`/movie/${id}`}
                            key={id}
                            title={original_title}
                        >
                            <img src={posterUrl} alt={original_title} />
                            <Button
                                onClick={event => handleRemoveMovie(id, event)}
                            >
                                <img src={click} alt="remove" />
                            </Button>
                        </Link>
                    );
                })}
            </StyledWrapperCard>
        </StyledWrapperFavoriteMovie>
    );
};
