import {ActionCreator,AnyAction} from 'redux'
import { actionType } from "../../actionType";

//START REQUEST
export type userListsRequestAction = {
    type: typeof actionType.LIST_USER_REQUEST
}
export const userListsRequest:ActionCreator<userListsRequestAction> = () => ({
    type: actionType.LIST_USER_REQUEST,
});

//SUCCESS REQUEST
export type userListsRequestSuccessAction = {
    type: typeof actionType.LIST_USER_REQUEST_SUCCESS
    data: any
}
export const userListsRequestSuccess:ActionCreator<userListsRequestSuccessAction> = (data: any) => ({
    type: actionType.LIST_USER_REQUEST_SUCCESS,
    data
});

//ERROR REQUEST
export type userListsRequestErrorAction = {
    type: typeof actionType.LIST_USER_REQUEST_ERROR
    error: Error
}
export const userListsRequestError:ActionCreator<userListsRequestErrorAction> = (error: Error) => ({
    type: actionType.LIST_USER_REQUEST_ERROR,
    error
});
