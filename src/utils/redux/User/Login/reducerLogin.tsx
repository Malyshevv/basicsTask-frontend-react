import { Reducer } from 'react';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import axios from 'axios';
import { actionType } from '../../actionType';
import { RootState } from '../../reducer';

import { loginRequest, loginRequestError, loginRequestSuccess } from './actionLogin';
import { apiUrl } from '../../../../../config/api.config';
import Cookies from "js-cookie";
import {signupRequestError} from "../signup/actionSignup";

export const loginReducer: Reducer<any, any> = (state, action) => {
    switch (action.type) {
        case actionType.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case actionType.LOGIN_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
            };
        case actionType.LOGIN_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                error: {
                    login: action.error
                }
            };
        default:
            return state;
    }
};

export const loginRequestAsync = (data:any): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    const url = `${apiUrl}/api/auth/signing`;

    dispatch(loginRequest());

    let formData = new FormData();
    formData.append('avatar', data.avatar);
    formData.append('birthday', data.birthday);
    formData.append('email', data.email);
    formData.append('gender', data.gender);
    formData.append('name', data.name);
    formData.append('password', data.password);

    let config = {
        url: url,
        method: 'POST',
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' },
        data: formData
    }

    axios(config)
        .then((resp) => {
            const userData = resp.data._doc;
            Cookies.set('token', userData.token)
            dispatch(loginRequestSuccess(userData));
        })
        .catch((error) => {
            console.log(error);
            dispatch(loginRequestError(String((error.response.data) ? JSON.stringify(error.response.data.error): error)))
        });
};
