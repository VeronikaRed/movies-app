import { useState } from 'react';
import axios from 'axios';

export const LayoutContainer = ({ children }) => {
    const [search, setSearch] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [movies, setMovies] = useState([]);

    const handleChangeSearch = e => setSearch(e.target.value);

    const handleSearchMovies = async () => {
        setIsSearching(true);

        try {
            const { data } = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );
            setMovies(data);
            setIsSearching(false);
        } catch (e) {
            console.error(e);
        }
    };

    return children({
        search,
        isSearching,
        movies,
        onChangeSearch: handleChangeSearch,
        onSearchMovies: handleSearchMovies
    });
};
