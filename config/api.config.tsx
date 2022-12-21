import Cookies from "js-cookie";

// export const apiUrl = 'http://localhost:5001'
export const apiUrl = 'http://localhost:3001';

export const avatarPath = '/upload/avatar/';
export const accessToken = Cookies.get('token');
export const headers = {
    "authorization": `${Cookies.get('token')}`,
    "Content-Type": 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
}
