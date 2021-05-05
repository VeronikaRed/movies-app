import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Layout } from './components';
import { LayoutContainer, MovieDetailsPageContainer } from './containers';
import { HomePage, AuthPage } from './pages';
import { GlobalStyles } from './styles';
import { darkTheme } from './themes';

const FakePage = () => {
    return <p>Hello! I'm a fake page!</p>;
};

export const App = () => (
    <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles />

            <LayoutContainer>
                {({ movies, ...other }) => (
                    <Layout {...other}>
                        <Switch>
                            <Route path="/auth">
                                <AuthPage />
                            </Route>

                            <Route path={['/favorite', '/profile', '/logout']}>
                                <FakePage />
                            </Route>

                            <Route path="/movie/:movieId">
                                <MovieDetailsPageContainer movies={movies} />
                            </Route>

                            <Route path="/" exact>
                                <HomePage movies={movies} />
                            </Route>

                            <Redirect to="/" />
                        </Switch>
                    </Layout>
                )}
            </LayoutContainer>
        </ThemeProvider>
    </BrowserRouter>
);
