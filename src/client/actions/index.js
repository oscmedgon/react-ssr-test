export const FETCH_USERS = 'fetch_users';
export const FETCH_ADMINS = 'fetch_admins';
export const FETCH_CURRENT_USER = 'fetch_current_user'

export const fetchUsers = () => async (dispatch, getState, api) => {
    const url = '/users';
    const res = await api.get(url);

    dispatch({
        type: FETCH_USERS,
        payload: res

    });
};

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const url = '/current_user';
    const res = await api.get(url);
    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res
    })
}


export const fetchAdmins = () => async (dispatch, getState, api) => {
    const url = '/admins';
    const res = await api.get(url);

    dispatch({
        type: FETCH_ADMINS,
        payload: res

    });
};