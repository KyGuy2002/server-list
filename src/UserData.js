import { createContext } from 'react';
import jwt_decode from "jwt-decode";


export const UserData = createContext({ setter: null, showSignInModal: null, value: null })


export function getTokenFromCookie() {
    try {
        const cookieValue = document.cookie
        .split('; ')
        .find((row) => row.startsWith('Authorization='))
        ?.split('=')[1]

        return cookieValue;
    } catch (exception) {
        return undefined;
    }
}


export function getUserDataFromCookie() {
    try {
    
        const data = jwt_decode(getTokenFromCookie());

        return data;
    } catch (exception) {
        return undefined;
    }
}


export function setCookie(token) {
    document.cookie = "Authorization="+token+"; Max-Age=999999999; Secure; Path=/"
}