import * as types from '../types';

export const authenticateUser = (idToken, localId) => {
    window.localStorage.setItem('idToken', idToken);
    window.localStorage.setItem('localId', localId);

    return {
        type: types.AUTHENTICATE_USER,
        payload: {
            idToken,
            localId
        }
    };
};

export const logoutUser = () => {
    window.localStorage.removeItem('idToken');
    window.localStorage.removeItem('localId');

    return {
        type: types.LOGOUT_USER
    };
};
