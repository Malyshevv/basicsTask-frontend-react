import {Reducer, useEffect} from "react";
import {actionType} from "../actionType";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducer";
import {Action} from "redux";
import Cookies from 'js-cookie'
import {store} from "../store";
import {setToken, setUserData} from "./actionToken";
import axios from "axios";
import {apiUrl, headers} from "../../../../config/api.config";


export const tokenReducer: Reducer<any, any> = (state, action) => {
    switch (action) {
        case actionType.SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case actionType.SET_USER_DATA:
            return {
                ...state,
                loading: false,
                data: action.data
            }
        default:
            return state
    }
}

export const saveToken  = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    useEffect( () => {
         const fetchData = async () => {
             const data = await axios.get(apiUrl + '/session', {headers: {'Content-Type': 'application/json'}, withCredentials: true})
                 .then((res) => {
                     // @ts-ignore
                     let result = res.data.result
                     if (result.user) {
                         dispatch(setUserData(result.user))
                         Cookies.set('token', result.user.token);
                     }
                 })
                 .catch((err) => {
                     return err;
                 });

             const token = Cookies.get('token') || window.__token__;
             dispatch(setToken(token))
             if (token && token != 'undefined') {
                 Cookies.set('token', token);
             }
         }
        fetchData().catch((err) => console.log(err))
    }, []);
}
