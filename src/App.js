import { ThemeProvider } from 'styled-components';
import { Layout } from './components';
import { GlobalStyles } from './styles';
import { darkTheme } from './themes';

export const App = () => (
    <ThemeProvider theme={darkTheme}>
        <GlobalStyles />

        <Layout>
            <span>Content</span>
        </Layout>
    </ThemeProvider>
);
