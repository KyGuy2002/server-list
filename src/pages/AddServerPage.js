import React from 'react';

import '../scss/pages/add-server.scss';

import { useState } from 'react';

import { useContext } from 'react';
import { UserData } from '../UserData';



export default function AddServerPage() {

    const userData = useContext(UserData);

    const [uuid] = useState(crypto.randomUUID());
    const [logoImage, setLogoImage] = useState("");
    const [bannerImage, setBannerImage] = useState("");
    const [serverName, setServerName] = useState("");
    const [serverIp, setServerIp] = useState("");
    const [fullDescription, setFullDescription] = useState("");
    const [accent, setAccent] = useState("");
    const [featuresCategories, setFeaturesCategories] = useState("");


    async function imageChange(file, type) {
        if (!file) return;

        if (type == "logo") setLogoImage(file);
        else setBannerImage(file);

        const formData = new FormData();
        formData.append("file", file);

        saveImage(formData, type);
    }

    async function saveImage(formData, type) {
        const response = await fetch("/api/server/"+uuid+"/images/"+type, {
            method: "PUT",
            body: formData
        })

        if (response.status == 401) {
            userData.showSignInModal(true, () => {
                saveImage(formData, type, true)
            });
        }
    }


    async function handleSubmit() {

        const jsonBody = {
            name: serverName,
            ip: serverIp,
            full_description: fullDescription,
            accent: accent,
            features_categories: JSON.parse(featuresCategories)
        }

        submitRequest(jsonBody)
    }

    async function submitRequest(jsonBody) {
        const response = await fetch("/api/server/"+uuid+"/details", {
            method: "PUT",
            body: JSON.stringify(jsonBody)
        })

        if (response.status == 401) {
            userData.showSignInModal(true, () => {
                submitRequest(jsonBody)
            });
        }
    }

    return (
        <div id="add-server-page">



            <section className='basic-details'>
                <span className="section-label">Basic Info</span>
                <div className='card'>
                    <label className='text short-text'>
                        Server Name
                        <input type="text" maxLength='15' placeholder='Awesome Server Name' onChange={(e) => setServerName(e.target.value)}/>
                    </label>

                    <label className='text short-text'>
                        Server Ip
                        <input type="text" maxLength='30' placeholder='myawesomeserver.net' onChange={(e) => setServerIp(e.target.value)}/>
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
                        <input type="text" maxLength='10000' placeholder='Write your full server description here.  Supports markdown...' onChange={(e) => setFullDescription(e.target.value)}/>
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