import PT from 'prop-types';
import { Button } from '../../components';
import {
    StyledWrapper,
    StyledDetails,
    StyledImage,
    StyledImageWrapper,
    StyledInfoWrapper,
    StyledInfo,
    StyledTitle,
    StyledReleaseDate
} from './styles';

const { REACT_APP_STORAGE_URL } = process.env;

export const MovieDetailsPage = ({ movie }) => {
    const {
        backdrop_path,
        original_title,
        poster_path,
        release_date,
        overview
    } = movie;

    const backdropUrl = REACT_APP_STORAGE_URL + backdrop_path;
    const posterUrl = REACT_APP_STORAGE_URL + poster_path;

    return (
        <StyledWrapper>
            <StyledDetails $imageUrl={backdropUrl}>
                <StyledImageWrapper>
                    <StyledImage src={posterUrl} alt={original_title} />
                </StyledImageWrapper>

                <StyledInfoWrapper>
                    <StyledInfo>
                        <StyledTitle>{original_title}</StyledTitle>
                        <StyledReleaseDate>{release_date}</StyledReleaseDate>
                        <p>{overview}</p>
                    </StyledInfo>

                    <Button>Add to Favorite</Button>
                </StyledInfoWrapper>
            </StyledDetails>
        </StyledWrapper>
    );
};

MovieDetailsPage.propTypes = {
    movie: PT.shape({
        id: PT.number.isRequired,
        original_title: PT.string.isRequired,
        poster_path: PT.string,
        backdrop_path: PT.string,
        overview: PT.string.isRequired,
        release_date: PT.string.isRequired
    }).isRequired
};
