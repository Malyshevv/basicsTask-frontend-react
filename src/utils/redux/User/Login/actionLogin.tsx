import { ActionCreator, AnyAction } from 'redux';
import { actionType } from '../../actionType';

// START REQUEST
export type loginRequestAction = {
    type: typeof actionType.LOGIN_REQUEST
}
export const loginRequest:ActionCreator<loginRequestAction> = () => ({
    type: actionType.LOGIN_REQUEST,
});

// SUCCESS REQUEST
export type loginRequestSuccessAction = {
    type: typeof actionType.LOGIN_REQUEST_SUCCESS
    data: any
}
export const loginRequestSuccess:ActionCreator<loginRequestSuccessAction> = (data: any) => ({
    type: actionType.LOGIN_REQUEST_SUCCESS,
    data,
});

// ERROR REQUEST
export type loginRequestErrorAction = {
    type: typeof actionType.LOGIN_REQUEST_ERROR
    error: Error
}
export const loginRequestError:ActionCreator<loginRequestErrorAction> = (error: Error) => ({
    type: actionType.LOGIN_REQUEST_ERROR,
    error,
});
