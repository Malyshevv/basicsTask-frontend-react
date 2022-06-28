import {ActionCreator,AnyAction} from 'redux'
import { actionType } from "../../actionType";

//START REQUEST
export type SignupRequestAction = {
    type: typeof actionType.SIGNUP_REQUEST
}
export const signupRequest:ActionCreator<SignupRequestAction> = () => ({
    type: actionType.SIGNUP_REQUEST,
});

//SUCCESS REQUEST
export type SignupRequestSuccessAction = {
    type: typeof actionType.SIGNUP_REQUEST_SUCCESS
    data: any
}
export const signupRequestSuccess:ActionCreator<SignupRequestSuccessAction> = (data: any) => ({
    type: actionType.SIGNUP_REQUEST_SUCCESS,
    data
});

//ERROR REQUEST
export type SignupRequestErrorAction = {
    type: typeof actionType.SIGNUP_REQUEST_ERROR
    error: Error
}
export const signupRequestError:ActionCreator<SignupRequestErrorAction> = (error: Error) => ({
    type: actionType.SIGNUP_REQUEST_ERROR,
    error
});
