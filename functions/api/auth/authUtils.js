import { parse } from 'cookie';
import * as jose from 'jose'


/**
 * Validates and decodes a jwt.
 * MAKE SURE TO AWAIT THIS FUNCTION!!!
 * @returns decoded payload
 * @throws exceptions if invalid
 */
export default async function validateAndDecode(context) {
    // Get jwt cookie
    const jwt = parse(context.request.headers.get('Cookie'))["Authorization"]


    // Check validity
    const JWKS = jose.createRemoteJWKSet(new URL('https://www.googleapis.com/oauth2/v3/certs'))
    const {payload} = await jose.jwtVerify(jwt, JWKS)


    // Valid
    return payload;
}