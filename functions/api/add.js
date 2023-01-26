import planetScaleClient from '../planetScaleClient'


export async function onRequestPost({ request, env }) {

    // const url = new URL(request.url);
    const server_uuid = crypto.randomUUID();

    const requestJson = await request.json();

    const result = await planetScaleClient(env).execute(
      'INSERT INTO Servers (server_uuid, name, ip, full_description, accent, features_categories, online, players) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
      [server_uuid, requestJson.name, requestJson.ip, requestJson.full_description, requestJson.accent, JSON.stringify(requestJson.features_categories), requestJson.online, requestJson.players]);
    const json = JSON.stringify(result)

    return new Response(json, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })

}