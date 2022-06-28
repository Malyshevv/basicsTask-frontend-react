import Cookies from "js-cookie";

export const apiUrl = 'http://localhost:5001'
//export const accessToken = '18afe9a4-c1e6-43b1-90f4-1857ba535fc6'
export const headers = {
    "authorization": `${Cookies.get('token')}`,
    "Content-Type": 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
}
