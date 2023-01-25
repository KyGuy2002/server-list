import { connect } from '@planetscale/database'


export async function onRequestGet({ request, env }) {

    const config = {
        host: env.HOST,
        username: env.USERNAME,
        password: env.PASSWORD
    }

    const conn = connect(config)
    const result = await conn.execute('SELECT * FROM Servers');

    const json = JSON.stringify(result)

    return new Response(json, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })

}










// const url = new URL(request.url);

    // let discovery_amount = url.searchParams.get("discovery_amount");
    // let server_amount = url.searchParams.get("server_amount");
    // let sponsored_amount = url.searchParams.get("sponsored_amount");

    // // TODO get from database
    // results = await env.DB.prepare("SELECT * FROM Servers ORDER BY `UUID` LIMIT ?1").bind(server_amount).all();
    //     return Response.json(results);

    // const body = JSON.stringify({
    //     discovery_card: discoveryCardData,
    //     server_cards: allServersCardData,
    //     sponsored_cards: sponsoredCardData
    // });
    // const headers = { 'Content-type': 'application/json' };
    // return new Response(body, { headers });