import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Layout } from './components';
import { LayoutContainer, MovieDetailsPageContainer } from './containers';
import { HomePage, AuthPage } from './pages';
import { GlobalStyles } from './styles';
import { darkTheme } from './themes';

const FakePage = () => {
    return <p>Hello! I'm a fake page!</p>;
};

const authSelector = state => !!state.auth.idToken;

export const App = () => {
    const isAuthenticated = useSelector(authSelector);

    return (
        <BrowserRouter>
            <ThemeProvider theme={darkTheme}>
                <GlobalStyles />

                <LayoutContainer>
                    {({ movies, popularMovie, ...other }) => (
                        <Layout {...other}>
                            <Switch>
                                {isAuthenticated && (
                                    <Route path={['/favorite', '/profile']}>
                                        <FakePage />
                                    </Route>
                                )}

                                {!isAuthenticated && (
                                    <Route path="/auth">
                                        <AuthPage />
                                    </Route>
                                )}

                                <Route path="/movie/:movieId">
                                    <MovieDetailsPageContainer
                                        movies={movies}
                                    />
                                </Route>

                                <Route path="/" exact>
                                    <HomePage
                                        movies={movies}
                                        popularMovie={popularMovie}
                                    />
                                </Route>

                                <Redirect to="/" />
                            </Switch>
                        </Layout>
                    )}
                </LayoutContainer>
            </ThemeProvider>
        </BrowserRouter>
    );
};
