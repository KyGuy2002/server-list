


export async function onRequestGet({ request, env }) {

    fetch("https://localhost:9200/test-index-2", {
        method: "PUT",
        authorization: "ApiKey "+env.ES_API_KEY
    })
    .then((response)=> {
        response = response.json();
    })
    .then((response)=> {
        console.log(response)
    })

}