import {Reducer, useEffect} from "react";
import {actionType} from "../actionType";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducer";
import {Action} from "redux";
import Cookies from 'js-cookie'
import {store} from "../store";
import {setToken, setUserData} from "./actionToken";
import axios from "axios";
import {accessToken, apiUrl, headers} from "../../../../config/api.config";
import {useSelector} from "react-redux";
import { createBrowserHistory } from 'history';

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
             const options = {
                 method: 'GET',
                 url: `${apiUrl}/auth/profile`,
                 headers: {
                     Authorization: `Bearer ${accessToken}`
                 }
             };

             const data = await axios.get(apiUrl + '/auth/profile', options)
                 .then((res) => {
                     let result = res.data
                     if (result) {
                         dispatch(setUserData(result))
                         Cookies.set('token', result.token);

                         return result;
                     }
                 })
                 .catch((err) => {
                     return err;
                 });

             const token = Cookies.get('token') || window.__token__;
             dispatch(setToken(token))

             const browserHistory = createBrowserHistory();
             browserHistory.push('/')
         }
        fetchData().catch((err) => console.log(err))
    }, []);
}

