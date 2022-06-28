import {ActionCreator,AnyAction} from 'redux'
import { actionType } from "./actionType";

export const setToken:ActionCreator<AnyAction> = (token) => ({
    type: actionType.SET_TOKEN,
    token
});
