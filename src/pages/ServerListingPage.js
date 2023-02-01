import React from 'react';
import CardTitle from '../components/cards/CardTitle.js'
import CardFeatures from '../components/cards/CardFeatures.js'
import LinkCardSection from '../components/sections/LinkCardSection.js';
import '../scss/cards/fullwidth-card.scss';

import '../scss/pages/server-listing.scss';

import ErrorModal from '../components/global/ErrorModal';

import { useParams } from 'react-router-dom'
import useFetch from "react-fetch-hook";

import Skeleton from 'react-loading-skeleton';
import SmallLinkCard from '../components/cards/SmallLinkCard.js';



export default function ServerListingPage() {

    const { server_uuid } = useParams();

    const { data: server, error } = useFetch(
        "/api/server/"+server_uuid+"/details"
    );

    return (
        <div id="server-listing-page">



            {/* Server Name - Top full page width row */}
            <section className='server-name card fullwidth-card'>

                <div className='gradient'></div>
                <div className='banner-img'>{
                    server ? <img src={"https://res.cloudinary.com/drimvo8rp/image/upload/v1674796880/server-banner/" + server.server_uuid + ".png"} alt={server.name + ' Banner'}></img>
                    : <Skeleton style={{transform: "translateY(-2px)"}}/>
                }</div>

                <CardTitle card={server}/>

            </section>



            {/* Link Cards */}
            <section className='link-card-section'>

                {linkCards.map(card => (
                    <SmallLinkCard name={card.name} key={card.name}/>
                ))}

            </section>



            {/* Main Content Container - contains 2 columns, below server name row */}
            <div className='main-content-container'>


                <section className='sidebar'>


                    {/* Server Stats/Specs Sidebar */}
                    <section className='server-features'>
                        <span className="section-label">Server Features</span>
                        
                        <div className='card'>
                            <h1>Features</h1>

                            <CardFeatures card={server}/>
                        </div>

                    </section>


                    {/* Server Features Sidebar */}
                    <section className='server-info'>
                        <span className="section-label">Server Info <i className="fa-solid fa-circle-info"></i></span>
                        
                        <div className='card'>
                            <h1>Server Info</h1>

                            {(server ? 
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Players</td>
                                        <td>{server.players}</td>
                                    </tr>
                                    <tr>
                                        <td>Status</td>
                                        <td>{server.online ? "Online" : "Offline"}</td>
                                    </tr>
                                    <tr>
                                        <td>Uptime</td>
                                        <td>{server.players}</td>
                                    </tr>
                                    <tr>
                                        <td>Version(s)</td>
                                        <td>{server.version}</td>
                                    </tr>
                                    <tr>
                                        <td>Platform(s)</td>
                                        <td>{server.platform}</td>
                                    </tr>
                                    <tr>
                                        <td>Location</td>
                                        <td>{server.location}</td>
                                    </tr>
                                </tbody>
                            </table>
                        : <Skeleton count={5.6} style={{marginBottom: "9px", height: "13px"}}/>)}
                        </div>

                    </section>


                </section>


                {/* Server Details/Description Column */}
                <section className='server-description'>
                    <span className="section-label">Server Description</span>

                    <div className='card'>
                        <h1>{(server ? server.name + " Description" : <Skeleton/>)}</h1>

                        <p>{(server ? server.full_description : <Skeleton count={5.3}/>)}</p>
                    </div>

                </section>



            </div>



        </div>
    )
}



const linkCards = [
    {
        name: "Website",
        description: "External Site",
        icon_classes: "fa-solid fa-arrow-up-right-from-square",
        image: "filter-wizard-background.png"
    },
    {
        name: "Shop",
        description: "External Site",
        icon_classes: "fa-solid fa-arrow-up-right-from-square",
        image: "filter-wizard-background.png"
    },
    {
        name: "Discord",
        description: "External Site",
        icon_classes: "fa-solid fa-arrow-up-right-from-square",
        image: "filter-wizard-background.png"
    },
    {
        name: "Email",
        description: "External Site",
        icon_classes: "fa-solid fa-arrow-up-right-from-square",
        image: "filter-wizard-background.png"
    },
]