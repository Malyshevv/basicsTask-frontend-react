import {Reducer} from "react";
import {RootState} from "../../reducer";
import {actionType} from "../../actionType";
import {ThunkAction} from "redux-thunk";
import { Action } from 'redux'
import {signupRequest, signupRequestError, signupRequestSuccess} from "./actionSignup";
import axios from "axios";
import { apiUrl, headers } from '../../../../../config/api.config';
import Cookies from "js-cookie";

export const reducerSignup: Reducer<any,any> = (state ,action) => {
    switch (action.type) {
        case actionType.SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case actionType.SIGNUP_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
            }
        case actionType.SIGNUP_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                error: {
                    signup: action.error
                }
            }
        default:
            return state;
    }
}


export const SignupRequestAsync = (data:any): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch,getState) => {
    const url = `${apiUrl}/api/auth/signup`;

    dispatch(signupRequest())
    // @ts-ignore
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
        headers: { 'Content-Type': 'multipart/form-data' },
        data: formData
    }
        axios(config)
            .then((resp) => {
                const userData = resp.data
                //setData(myUserData)
                Cookies.set('token', userData.token)
                dispatch(signupRequestSuccess(userData))
            })
            .catch((error) => {
                console.log(error)
                dispatch(signupRequestError(String((error.response.data) ? JSON.stringify(error.response.data.error): error)))
            });

}
