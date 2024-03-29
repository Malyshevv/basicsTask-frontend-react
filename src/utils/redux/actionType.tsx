export enum actionType {
    SET_TOKEN = 'SET_TOKEN',
    SET_USER_DATA = 'SET_USER_DATA',
    //USER ACTION
    USER_REQUEST = 'USER_REQUEST',
    USER_REQUEST_SUCCESS = 'USER_REQUEST_SUCCESS',
    USER_REQUEST_ERROR = 'USER_REQUEST_ERROR',
    //LOGIN ACTION
    LOGIN_REQUEST = 'LOGIN_REQUEST',
    LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS',
    LOGIN_REQUEST_ERROR = 'LOGIN_REQUEST_ERROR',
    //SIGNUP ACTION
    SIGNUP_REQUEST = 'SIGNUP_REQUEST',
    SIGNUP_REQUEST_SUCCESS = 'SIGNUP_REQUEST_SUCCESS',
    SIGNUP_REQUEST_ERROR = 'SIGNUP_REQUEST_ERROR',
    //List accounts
    LIST_USER_REQUEST = 'LIST_USER_REQUEST',
    LIST_USER_REQUEST_SUCCESS = 'LIST_USER_REQUEST_SUCCESS',
    LIST_USER_REQUEST_ERROR = 'LIST_USER_REQUEST_ERROR',
}
