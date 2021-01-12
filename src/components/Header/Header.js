import { Input } from '../Input';
import { StyledHeader } from './styles';
import { StyledWidthLimiter } from '../../styles';

export const Header = () => (
    <StyledHeader>
        <StyledWidthLimiter>
            <Input type="text" name="search" placeholder="Search movies" />
        </StyledWidthLimiter>
    </StyledHeader>
);
