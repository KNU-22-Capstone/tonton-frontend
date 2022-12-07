import { createSlice } from '@reduxjs/toolkit';
import { Cookies } from 'react-cookie';
export const TOKEN_TIME_OUT = 600*1000;
const cookie = new Cookies();

export const tokenSlice = createSlice({
    name: 'authToken',
    initialState: {
        authenticated: false,
        accessToken: null,
        expireTime: null
    },
    reducers: {
        SET_TOKEN: (state, action) => {
            state.authenticated = true;
            state.accessToken = action.payload.accessToken;
            state.expireTime = action.payload.accessTokenExpiresIn;

            cookie.set('TOKEN', action.payload.accessToken);
        },
        DELETE_TOKEN: (state) => {
            state.authenticated = false;
            state.accessToken = null;
            state.expireTime = null
        },
    }
})

export const { SET_TOKEN, DELETE_TOKEN } = tokenSlice.actions;

export default tokenSlice.reducer;