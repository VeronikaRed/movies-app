import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TITLE = {
    '/': 'Movies App | Home',
    '/favorite': 'Movies App | Favorite movies',
    '/profile': 'Movies App | Profile',
    '/logout': 'Movies App | Logout',
    '/auth': 'Movies App | Auth'
};

export const useDocumentTitle = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        const title = TITLE[pathname];
        document.title = title || 'Movies App';
    }, [pathname]);
};
