import PT from 'prop-types';

import { Link } from '../../components';
import { StyledWrapper, StyledCard } from './styles';

const { REACT_APP_STORAGE_URL } = process.env;

export const HomePage = ({ movies, popularMovie }) => (
    <StyledWrapper>
        {movies.length === 0 &&
            popularMovie.map(({ id, original_title, poster_path }) => {
                const imageUrl = REACT_APP_STORAGE_URL + poster_path;

                return (
                    <StyledCard key={id} $imageUrl={imageUrl}>
                        <Link to={`/movie/${id}`}>{original_title}</Link>
                    </StyledCard>
                );
            })}

        {movies.map(({ id, original_title, poster_path }) => {
            const imageUrl = REACT_APP_STORAGE_URL + poster_path;

            return (
                <StyledCard key={id} $imageUrl={imageUrl}>
                    <Link to={`/movie/${id}`}>{original_title}</Link>
                </StyledCard>
            );
        })}
    </StyledWrapper>
);

HomePage.propTypes = {
    movies: PT.arrayOf(
        PT.shape({
            id: PT.number.isRequired,
            original_title: PT.string.isRequired,
            poster_path: PT.string
        })
    ).isRequired,

    popularMovie: PT.arrayOf(
        PT.shape({
            id: PT.number.isRequired,
            original_title: PT.string.isRequired,
            poster_path: PT.string
        })
    ).isRequired
};
