import PT from 'prop-types';

import { Input } from '../Input';
import { Button } from '../Button';
import { StyledHeader, StyledInputWrapper, StyledSearch } from './styles';
import { StyledWidthLimiter } from '../../styles';

export const Header = ({
    search,
    isSearching,
    onChangeSearch,
    onSearchMovies
}) => (
    <StyledHeader>
        <StyledWidthLimiter>
            <StyledSearch>
                <StyledInputWrapper>
                    <Input
                        type="text"
                        name="search"
                        placeholder="Search movies"
                        value={search}
                        onChange={onChangeSearch}
                    />
                </StyledInputWrapper>

                <Button onClick={onSearchMovies} disabled={isSearching}>
                    {isSearching ? 'Searching' : 'Search'}
                </Button>
            </StyledSearch>
        </StyledWidthLimiter>
    </StyledHeader>
);

Header.propTypes = {
    search: PT.string.isRequired,
    onChangeSearch: PT.func.isRequired,
    onSearchMovies: PT.func.isRequired,
    isSearching: PT.bool.isRequired
};
