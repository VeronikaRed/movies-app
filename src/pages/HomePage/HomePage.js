import PT from 'prop-types';
import { StyledWrapper } from './styles';

export const HomePage = ({ movies }) => (
    <StyledWrapper>
        {movies.map(({ id, original_title, poster_path }) => (
            <div key={id}>
                <h1>{original_title}</h1>
                <img src={poster_path} alt={original_title} />
            </div>
        ))}
    </StyledWrapper>
);

HomePage.propTypes = {
    movies: PT.arrayOf(
        PT.shape({
            id: PT.number.isRequired,
            original_title: PT.string.isRequired,
            poster_path: PT.string
        })
    ).isRequired
};
