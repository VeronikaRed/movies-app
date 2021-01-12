import { Header } from '../Header';
import { Footer } from '../Footer';
import { StyledWidthLimiter } from '../../styles';
import { StyledLayout, StyledMain } from './styles';

export const Layout = ({ children }) => (
    <StyledLayout>
        <Header />
        <StyledMain>
            <StyledWidthLimiter>{children}</StyledWidthLimiter>
        </StyledMain>
        <Footer />
    </StyledLayout>
);
