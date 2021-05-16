import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LayoutContainer, MovieDetailsPageContainer } from './containers';
import { HomePage, AuthPage, FavoriteMoviePage } from './pages';
import { Layout } from './components';
import { GlobalStyles } from './styles';
import { darkTheme } from './themes';

const authSelector = state => !!state.auth.idToken;

export const App = () => {
    const isAuthenticated = useSelector(authSelector);

    return (
        <BrowserRouter>
            <ThemeProvider theme={darkTheme}>
                <GlobalStyles />

                <LayoutContainer>
                    {({ movies, popularMovies, ...other }) => (
                        <Layout {...other}>
                            <Switch>
                                {!isAuthenticated && (
                                    <Route path="/auth">
                                        <AuthPage />
                                    </Route>
                                )}

                                {isAuthenticated && (
                                    <Route path="/favorite">
                                        <FavoriteMoviePage
                                            movies={movies}
                                            popularMovies={popularMovies}
                                        />
                                    </Route>
                                )}

                                <Route path="/movie/:movieId">
                                    <MovieDetailsPageContainer
                                        movies={movies}
                                        popularMovies={popularMovies}
                                    />
                                </Route>

                                <Route path="/" exact>
                                    <HomePage
                                        movies={movies}
                                        popularMovies={popularMovies}
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
