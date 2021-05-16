import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authenticateUser } from '../store';

export const useAuthenticateUser = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const idToken = localStorage.getItem('idToken');
        const localId = localStorage.getItem('localId');
        if (!idToken || !localId) return;
        dispatch(authenticateUser(idToken, localId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
