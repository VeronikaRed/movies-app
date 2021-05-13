import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDocumentTitle, useAuthenticateUser } from '../../hooks';

const { REACT_APP_API_URL, REACT_APP_MOVIE_API_KEY } = process.env;

export const LayoutContainer = ({ children }) => {
    const [search, setSearch] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [movies, setMovies] = useState([]);
    const [popularMovie, setPopularMovie] = useState([]);

    const history = useHistory();
    useDocumentTitle();
    useAuthenticateUser();

    const handleChangeSearch = e => setSearch(e.target.value);

    const handleSearchMovies = async () => {
        setIsSearching(true);

        try {
            const url = `${REACT_APP_API_URL}/search/movie?api_key=${REACT_APP_MOVIE_API_KEY}&query=${search}`;
            const {
                data: { results }
            } = await axios.get(url);

            setSearch('');
            setMovies(results);

            setIsSearching(false);

            history.push('/');
        } catch (e) {
            console.log(e);
        }
    };

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            handleSearchMovies();
        }
    };

    useEffect(() => {
        (async () => {
            try {
                const url = `${REACT_APP_API_URL}/movie/popular?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`;
                const {
                    data: { results }
                } = await axios.get(url);

                setPopularMovie(results);
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    return children({
        search,
        isSearching,
        movies,
        onChangeSearch: handleChangeSearch,
        onSearchMovies: handleSearchMovies,
        onKeyDown: handleKeyDown,
        popularMovie
    });
};
