import { Input } from '../Input';
import { StyledHeader, StyledInputWrapper } from './styles';
import { StyledWidthLimiter } from '../../styles';

export const Header = () => (
    <StyledHeader>
        <StyledWidthLimiter>
            <div>
                <StyledInputWrapper>
                    <Input
                        type="text"
                        name="search"
                        placeholder="Search movies"
                    />
                </StyledInputWrapper>
            </div>
        </StyledWidthLimiter>
    </StyledHeader>
);
