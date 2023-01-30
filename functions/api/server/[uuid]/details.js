import planetScaleClient from '../../../utils/planetScaleClient';
import { authMiddlewareHandler } from '../../../utils/authUtils';


export async function onRequestGet({ env, params }) {

  const result = await planetScaleClient(env).execute('SELECT * FROM Servers WHERE server_uuid=?', [params.uuid]);

  const resultJson = result.rows[0];

  resultJson.features_categories = JSON.parse(resultJson.features_categories);

  return new Response(JSON.stringify(resultJson), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })

}


export const onRequestPut = [authMiddlewareHandler, handle]; // Auth required
export async function handle({ request, env, params, data }) {

    const requestJson = await request.json();

    const response = await planetScaleClient(env).execute(
        'INSERT INTO Servers (server_uuid, owner_id, name, ip, full_description, accent, features_categories, online, players) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);',
        [params.uuid, data.user.sub, requestJson.name, requestJson.ip, requestJson.full_description, requestJson.accent, JSON.stringify(requestJson.features_categories), requestJson.online, requestJson.players]);

    return new Response(response.status);
}