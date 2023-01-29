import planetScaleClient from '../../../../planetScaleClient'


export async function onRequestPut({ request, env, params }) {

    const requestJson = await request.json();

    const response = await planetScaleClient(env).execute(
        'INSERT INTO Servers (server_uuid, name, ip, full_description, accent, features_categories, online, players) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
        [params.uuid, requestJson.name, requestJson.ip, requestJson.full_description, requestJson.accent, JSON.stringify(requestJson.features_categories), requestJson.online, requestJson.players]);

    return new Response(response.status);
}