export async function onRequestPut({ request, env, params }) {

    const incomingFormData = await request.formData();

    const formData = new FormData();
    formData.append("file", incomingFormData.get("file"));
    formData.append("public_id", params.uuid);
    formData.append("upload_preset", "server-"+params.type);

    const response = await fetch("https://api.cloudinary.com/v1_1/drimvo8rp/image/upload", {
        method: "POST",
        body: formData
    })

    return new Response(response.status);
}