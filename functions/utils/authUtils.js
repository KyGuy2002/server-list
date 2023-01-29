import { parse } from 'cookie';
import * as jose from 'jose'


export async function authMiddlewareHandler(context) {
    try {

        // Get jwt cookie
        const jwt = parse(context.request.headers.get('Cookie'))["Authorization"]

        // Check validity
        const JWKS = jose.createRemoteJWKSet(new URL('https://www.googleapis.com/oauth2/v3/certs'))
        const {payload} = await jose.jwtVerify(jwt, JWKS)

        // Save to data.user
        context.data.user = payload;


    } catch (exception) {
        console.log(exception)
        return new Response("Error validating authorization jwt. Type: "+exception.name, { status: 401 })
    }

    return await context.next();
}