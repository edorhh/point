import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    manager_id: '',
    manager_name: '',
    manager_auth: [],
    isLoggedIn: false,
    book_store_key: '',
    lib_code: '',
};

const slice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login(state, action) {
            state.manager_id = action.payload.username;
            state.manager_auth = action.payload.userAuth;
            state.manager_name = action.payload.name;
            state.book_store_key = action.payload.bookStoreKey;
            state.lib_code = action.payload.libCode;
            state.isLoggedIn = true;
        },
        logout(state, action) {
            console.log('로그아웃!');
            state.isLoggedIn = false;
        },
    },
});

export default slice;
