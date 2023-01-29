import validateAndDecode from './authUtils';


export async function onRequest(context) {
    try {

        await validateAndDecode(context)


    } catch (exception) {
        console.log(exception)
        return new Response("Error validating authorization jwt. Type: "+exception.name, { status: 401 })
    }

    return await context.next();
}