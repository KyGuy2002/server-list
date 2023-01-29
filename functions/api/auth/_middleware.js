import validateAndDecode from './authUtils';


export async function onRequest(context) {
    try {

        await validateAndDecode(context)


    } catch (exception) {
        return new Response("Error validating authorization jwt.", { status: 401 })
    }

    return await context.next();
}