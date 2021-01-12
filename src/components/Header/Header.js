import { Input } from '../Input';
import { Button } from '../Button';
import { StyledHeader, StyledInputWrapper, StyledSearch } from './styles';
import { StyledWidthLimiter } from '../../styles';

export const Header = () => (
    <StyledHeader>
        <StyledWidthLimiter>
            <StyledSearch>
                <StyledInputWrapper>
                    <Input
                        type="text"
                        name="search"
                        placeholder="Search movies"
                    />
                </StyledInputWrapper>
                <Button>Search</Button>
            </StyledSearch>
        </StyledWidthLimiter>
    </StyledHeader>
);
