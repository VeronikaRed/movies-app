import { Header } from '../Header';
import { StyledLayout } from './styles';

export const Layout = ({ children }) => (
    <StyledLayout>
        <Header />
        {children}
    </StyledLayout>
);
