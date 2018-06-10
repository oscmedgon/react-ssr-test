import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async dyspatch => {
    const url = 'https://react-ssr-api.herokuapp.com/users';
    const res = axios.get(url);

    dispatch({
        type: FETCH_USERS,
        payload: res

    });
};