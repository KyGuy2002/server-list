import React from 'react';

import '../scss/pages/add-server.scss';

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



            <section className='basic-details'>
                <span className="section-label">Basic Info</span>
                <div className='card'>
                    <label className='text short-text'>
                        Server Name
                        <input type="text" placeholder='Awesome Server Name' onChange={(e) => setServerName(e.target.value)}/>
                    </label>

                    <label className='text short-text'>
                        Server Ip
                        <input type="text" onChange={(e) => setServerIp(e.target.value)}/>
                    </label>

                    <label className='image logo'>
                        Upload Logo
                        <div style={(logoImage ? {backgroundImage: "url("+URL.createObjectURL(logoImage)+")"} : undefined)}>
                            <i className="fa-solid fa-pencil"></i>
                            {/* <i className="fa-solid fa-plus"></i> */}
                        </div>
                        <input type="file" onChange={(e) => imageChange(e.target.files[0], "logo")}/>
                    </label>

                    <label className='image'>
                        Upload Banner
                        <div style={(bannerImage ? {backgroundImage: "url("+URL.createObjectURL(bannerImage)+")"} : undefined)}>
                            <i className="fa-solid fa-pencil"></i>
                            {/* <i className="fa-solid fa-plus"></i> */}
                        </div>
                        <input type="file" onChange={(e) => imageChange(e.target.files[0], "banner")}/>
                    </label>
                </div>

            </section>



            <section className='specific'>
                <span className="section-label">Details</span>
                <div className='card'>
                    <label className='text long-text'>
                        Description
                        <input type="text" onChange={(e) => setFullDescription(e.target.value)}/>
                    </label>

                    <label className='color'>
                        Accent
                        <input type="color" id="colorpicker" onChange={(e) => setAccent(e.target.value.replace('#', ''))}/>
                    </label>

                    <label className='text short-text'>
                        Features Categories
                        <input type="text" onChange={(e) => setFeaturesCategories(e.target.value)}/>
                    </label>
                </div>

            </section>



            <section className='save'>
                <span className="section-label">Submit</span>
                <div className='card'>
                    <button onClick={handleSubmit}>Submit</button>
                </div>

            </section>



        </div>
    )
}