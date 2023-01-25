import planetScaleClient from '../planetScaleClient'


export async function onRequestPut({ request, env }) {

    const url = new URL(request.url);
    const name = url.searchParams.get("name");
    const id = url.searchParams.get("id");

    const result = await planetScaleClient(env).execute('INSERT INTO es_table (id, client_name) VALUES (?, ?)', [id, name]);
    const json = JSON.stringify(result)

    return new Response(json, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })

}