import PT from 'prop-types';

import { Input } from '../Input';
import { Button } from '../Button';
import { NavBar } from '../NavBar';
import {
    StyledHeader,
    StyledInputWrapper,
    StyledSearch,
    StyledHeaderWidthLimiter
} from './styles';

export const Header = ({
    search,
    isSearching,
    onChangeSearch,
    onSearchMovies,
    onKeyDown
}) => {
    return (
        <StyledHeader>
            <StyledHeaderWidthLimiter>
                <StyledSearch>
                    <StyledInputWrapper>
                        <Input
                            type="text"
                            name="search"
                            placeholder="Search movies"
                            value={search}
                            onChange={onChangeSearch}
                            onKeyDown={onKeyDown}
                        />
                    </StyledInputWrapper>

                    <Button onClick={onSearchMovies} disabled={isSearching}>
                        {isSearching ? 'Searching' : 'Search'}
                    </Button>
                </StyledSearch>

                <NavBar />
            </StyledHeaderWidthLimiter>
        </StyledHeader>
    );
};

Header.propTypes = {
    search: PT.string.isRequired,
    onChangeSearch: PT.func.isRequired,
    onSearchMovies: PT.func.isRequired,
    isSearching: PT.bool.isRequired,
    onKeyDown: PT.func.isRequired
};
