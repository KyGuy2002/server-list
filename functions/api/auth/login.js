import planetScaleClient from '../../planetScaleClient'
import validateAndDecode from './authUtils'


export async function onRequestPost(context) {

    const payload = await validateAndDecode(context)

    const response = await planetScaleClient(context.env).execute(
        'INSERT IGNORE INTO Users (user_id, email) VALUES (?, ?);',
        [payload.sub, payload.email]);

    return new Response("", {status: response.status})

}