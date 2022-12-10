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
        LOGIN_CHECK: (state) => {
            const token = cookie.get('TOKEN');
            const url = 'http://localhost:8080/api/member/me'
            axios.get(url, { headers: {Authorization: `Bearer ${token}`,}}
            ).then(response => {
                console.log(response);
                state.authenticated = true;
            })
            .catch(error => {
                console.log(error)
                //state.authenticated = false;
            })
        }
     }
})

export const { SET_TOKEN, DELETE_TOKEN, LOGIN_CHECK } = tokenSlice.actions;

export default tokenSlice.reducer;