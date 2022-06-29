import {ActionCreator, AnyAction} from "redux";
import {actionType} from "../actionType";

export type setTokenAction = {
    type: typeof actionType.SET_TOKEN
    token: string
}

export const setToken:ActionCreator<setTokenAction> = (token) => ({
    type: actionType.SET_TOKEN,
    token
});

export type setUserDataAction = {
    type: typeof actionType.SET_USER_DATA
    data: any
}
export const setUserData:ActionCreator<setUserDataAction> = (data: any) => ({
    type: actionType.SET_USER_DATA,
    data,
});

