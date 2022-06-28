import {Reducer} from "react";
import {RootState} from "../../reducer";
import {actionType} from "../../actionType";
import {ThunkAction} from "redux-thunk";
import { Action } from 'redux'
import axios from "axios";
import { apiUrl, headers } from '../../../../../config/api.config';
import {userListsRequest, userListsRequestError, userListsRequestSuccess} from "./actionUserLists";
import Cookies from "js-cookie";

export const reducerUserLists: Reducer<any,any> = (state , action) => {
    switch (action.type) {
        case actionType.LIST_USER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case actionType.LIST_USER_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
            }
        case actionType.USER_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}


export const userListRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch,getState) => {
    const url = `${apiUrl}/api/users`;

    dispatch(userListsRequest())

        axios.get(url, {
            headers: headers
        })
            .then((resp) => {
                const userData = resp.data
                console.log(userData)
                dispatch(userListsRequestSuccess(userData))
            })
            .catch((error) => {
                console.log(error)
                dispatch(userListsRequestError(String((error.response.data) ? JSON.stringify(error.response.data.error): error)))
            });

}
