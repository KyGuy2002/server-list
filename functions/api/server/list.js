import planetScaleClient from '../../utils/planetScaleClient'


export async function onRequestGet({ env }) {

    const result = await planetScaleClient(env).execute('SELECT * FROM Servers');

    const rowsJson = result.rows;

    rowsJson.map(server => {
      server.features_categories = JSON.parse(server.features_categories);
    })

    const resultJson = JSON.stringify({
      discovery_card: rowsJson[0],
      server_cards: rowsJson,
      sponsored_cards: rowsJson,
    })

    return new Response(resultJson, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })

}