import React from 'react';

import { useState } from 'react';



export default function AddServerPage() {

    const [uuid] = useState(crypto.randomUUID());
    const [logoImage, setLogoImage] = useState("");
    const [bannerImage, setBannerImage] = useState("");
    const [serverName, setServerName] = useState("");
    const [serverIp, setServerIp] = useState("");
    const [fullDescription, setFullDescription] = useState("");
    const [accent, setAccent] = useState("");
    const [featuresCategories, setFeaturesCategories] = useState("");


    async function imageChange(file, type) {

        if (type == "logo") setLogoImage(file);
        else setBannerImage(file);

        const formData = new FormData();
        formData.append("file", file);
        await fetch("/api/auth/server/"+uuid+"/images/"+type, {
            method: "PUT",
            body: formData
        })
    }


    const handleSubmit = async () => {

        const jsonBody = {
            name: serverName,
            ip: serverIp,
            full_description: fullDescription,
            accent: accent,
            features_categories: JSON.parse(featuresCategories)
        }

        const response = await fetch("/api/auth/server/"+uuid+"/details", {
            method: "PUT",
            body: JSON.stringify(jsonBody)
        })
    }

    return (
        <div id="add-server-page">

            <form onSubmit={handleSubmit}>

                {(logoImage ? <img src={URL.createObjectURL(logoImage)}></img> : <h1>image goes here</h1>)}

                <label>
                    Upload Logo
                    <input type="file" onChange={(e) => imageChange(e.target.files[0], "logo")}/>
                </label>

                {(bannerImage ? <img src={URL.createObjectURL(bannerImage)}></img> : <h1>image goes here</h1>)}

                <label>
                    Upload Banner
                    <input type="file" onChange={(e) => imageChange(e.target.files[0], "banner")}/>
                </label>

                <label>
                    Server Name
                    <input type="text" onChange={(e) => setServerName(e.target.value)}/>
                </label>

                <label>
                    Server Ip
                    <input type="text" onChange={(e) => setServerIp(e.target.value)}/>
                </label>

                <label>
                    Description
                    <input type="text" onChange={(e) => setFullDescription(e.target.value)}/>
                </label>

                <label>
                    Accent
                    <input type="text" onChange={(e) => setAccent(e.target.value)}/>
                </label>

                <label>
                    Features Categories
                    <input type="text" onChange={(e) => setFeaturesCategories(e.target.value)}/>
                </label>

                <input type="submit"/>

            </form>

        </div>
    )
}