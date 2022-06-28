import {Reducer} from "react";
import {actionType} from "./actionType";

import {tokenReducer} from "./token/tokenReducer";
import {loginReducer} from "./User/Login/reducerLogin";
import {reducerSignup} from "./User/signup/reducerSignup";
import {reducerUserLists} from "./User/Lists/reducerUserLists";

export type RootState = {
    token: string,
    accounts: {
        loading: boolean,
        error?: string,
        data?: any
    },
    user: {
        loading: boolean,
        error?: {
            login: string,
            signup: string,
            error: string
        },
        data?: any
    },
}
const initialState:RootState = {
    token: '',
    accounts: {
        loading: false,
        error: '',
        data: null
    },
    user: {
        loading: false,
        error: {
            login: '',
            signup: '',
            error: ''
        },
        data: null
    },
}


export const rootReducer: Reducer<any,any> = (state = initialState ,action) => {
    switch (action.type) {
        case actionType.SET_TOKEN:
            return {
                ...state,
                token: tokenReducer(action.token,action)
            }
        case actionType.LOGIN_REQUEST:
        case actionType.LOGIN_REQUEST_SUCCESS:
        case actionType.LOGIN_REQUEST_ERROR:
            return {
                ...state,
                user: loginReducer(state.user,action)
            }
        case actionType.SIGNUP_REQUEST:
        case actionType.SIGNUP_REQUEST_SUCCESS:
        case actionType.SIGNUP_REQUEST_ERROR:
            return {
                ...state,
                user: reducerSignup(state.user,action)
            }
        case actionType.LIST_USER_REQUEST:
        case actionType.LIST_USER_REQUEST_SUCCESS:
        case actionType.LIST_USER_REQUEST_ERROR:
            return {
                ...state,
                accounts: reducerUserLists(state.accounts,action)
            }
        default:
            return state;
    }
}
