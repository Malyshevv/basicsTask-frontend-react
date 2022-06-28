import {Reducer, useEffect} from "react";
import {actionType} from "../actionType";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducer";
import {Action} from "redux";
import Cookies from 'js-cookie'
import {store} from "../store";
import {setToken} from "./actionToken";
import axios from "axios";
import {apiUrl, headers} from "../../../../config/api.config";


export const tokenReducer: Reducer<any, any> = (state, action) => {
    switch (action) {
        case actionType.SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        default:
            return state
    }
}

export const saveToken  = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    useEffect(() => {
        axios.get(apiUrl + '/session', { headers: { 'Content-Type': 'application/json' }, withCredentials: true })
            .then((res) => {
                // @ts-ignore
                let result = res.data.result
                if (result.user) {
                    Cookies.set('token', result.user.token);
                }
            })
            .catch();
        const token = Cookies.get('token') || window.__token__;
        dispatch(setToken(token))
        if (token && token != 'undefined') {
            Cookies.set('token', token);
        }
    }, []);
}
