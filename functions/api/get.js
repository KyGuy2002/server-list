import planetScaleClient from '../planetScaleClient'


export async function onRequestGet({ request, env }) {

  const url = new URL(request.url);

  const result = await planetScaleClient(env).execute('SELECT * FROM Servers WHERE server_uuid=?', [url.searchParams.get("server_uuid")]);

  const resultJson = result.rows[0];

  resultJson.features_categories = JSON.parse(resultJson.features_categories);

  return new Response(JSON.stringify(resultJson), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })

}