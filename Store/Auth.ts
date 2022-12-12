import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ApiError } from 'next/dist/server/api-utils';
import { Cookies } from 'react-cookie';

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
            state.expireTime = new Date().getTime() + action.payload.accessTokenExpiresIn;

            cookie.set('TOKEN', action.payload.accessToken,
            /*{expires: state.expireTime = new Date().getTime() + action.payload.accessTokenExpiresIn}*/ );
        },
        DELETE_TOKEN: (state) => {
            state.authenticated = false;
            state.accessToken = null;
            state.expireTime = null
        },
        LOGIN_CHECK_SUCCESS: (state) => {
            state.authenticated = true;
            state.accessToken = cookie.get('TOKEN');
            state.expireTime =  null
        }
     }
})

export const { SET_TOKEN, DELETE_TOKEN, LOGIN_CHECK_SUCCESS } = tokenSlice.actions;

export default tokenSlice.reducer;