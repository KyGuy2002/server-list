import planetScaleClient from '../planetScaleClient'


export async function onRequestGet({ request, env }) {

    const result = await planetScaleClient(env).execute('SELECT * FROM es_table');
    const json = JSON.stringify(result)

    return new Response(json, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })

}