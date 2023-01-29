import { parse } from 'cookie';
import * as jose from 'jose'


export async function onRequest(context) {
    try {

        // Get jwt cookie
        const jwt = parse(context.request.headers.get('Cookie'))["Authorization"]


        // Check validity
        const JWKS = jose.createRemoteJWKSet(new URL('https://www.googleapis.com/oauth2/v3/certs'))
        const {payload} = await jose.jwtVerify(jwt, JWKS)


        // Valid
        const userData = JSON.stringify(payload)


    } catch (Exception) {
        return new Response("Invalid, expired, or missing authorization jwt.", { status: 401 })
    }


    try {
        return await context.next();
    } catch (exception) {
        console.log(exception.message)
        return new Response("An unknown error has occurred.", { status: 500 })
    }
}