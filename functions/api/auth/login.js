import planetScaleClient from '../../utils/planetScaleClient';
import { authMiddlewareHandler } from '../../utils/authUtils';


export const onRequestPost = [authMiddlewareHandler, handle]; // Auth required
export async function handle({ env, data }) {

    const payload = data.user;

    const response = await planetScaleClient(env).execute(
        'INSERT IGNORE INTO Users (user_id, email) VALUES (?, ?);',
        [payload.sub, payload.email]);

    return new Response("", {status: response.status})

}