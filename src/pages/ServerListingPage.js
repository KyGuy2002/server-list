import React from 'react';
import CardTitle from '../components/cards/CardTitle.js'
import CardFeatures from '../components/cards/CardFeatures.js'
import LinkCardSection from '../components/sections/LinkCardSection.js';
import '../scss/cards/fullwidth-card.scss';

import '../scss/pages/server-listing.scss';



export default function ServerListingPage(props) {
    return (
        <div id="server-listing-page">

            {/* Server Name - Top full page width row */}
            <section className='server-name card fullwidth-card'>

                <div className='gradient'></div>
                <div className='banner-img'><img src={process.env.PUBLIC_URL + '/images/banners/' + card.id + ".png"} alt={card.name + ' Banner'}></img></div>

                <CardTitle card={card}/>

            </section>

            <LinkCardSection cards={linkCards}/>

            {/* Main Content Container - contains 2 columns, below server name row */}
            <div className='main-content-container'>

                {/* Server Features Sidebar */}
                <section className='server-stats-sidebar'>
                    <span className="section-label">Server Info <i className="fa-solid fa-circle-info"></i></span>
                    
                    <div className='card'>
                        <h1>Server Info</h1>

                        <table>
                            <tbody>
                                <tr>
                                    <td>Players</td>
                                    <td>{card.players}</td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td>{card.online ? "Online" : "Offline"}</td>
                                </tr>
                                <tr>
                                    <td>Uptime</td>
                                    <td>{card.players}</td>
                                </tr>
                                <tr>
                                    <td>Version(s)</td>
                                    <td>{card.version}</td>
                                </tr>
                                <tr>
                                    <td>Platform(s)</td>
                                    <td>{card.platform}</td>
                                </tr>
                                <tr>
                                    <td>Location</td>
                                    <td>{card.location}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </section>


                {/* Server Stats/Specs Sidebar */}
                <section className='server-features-sidebar'>
                    <span className="section-label">Server Features</span>
                    
                    <div className='card'>
                        <h1>Features</h1>

                        <CardFeatures card={card}/>
                    </div>

                </section>


                {/* Server Details/Description Column */}
                <section className='server-description-column'>
                    <span className="section-label">Server Description</span>

                    <div className='card'>
                        <h1>{card.name} Description</h1>

                        <p>{card.description}</p>
                    </div>

                </section>

            </div>
        </div>
    )
}


const card = {
    name: "MCParks",
    ip: "mcblockbuilds.net",
    id: "5",
    accent: "#3a8c00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec dolor ac libero scelerisque dictum. Suspendisse pulvinar vestibulum erat ut ultricies. Mauris mollis viverra felis nec lacinia. Duis sagittis mauris ac pulvinar ornare. Nullam sagittis interdum nibh a porttitor. Nullam tempor, urna nec gravida varius, nisl nunc elementum massa, ac tempor lectus mi vitae tellus. Nullam at augue sem. Nam condimentum nec sem quis consectetur. Quisque viverra in orci a tempus. Morbi augue diam, rhoncus sit amet orci ac, facilisis molestie eros. Vivamus leo ex, fringilla vitae metus sed, consequat ullamcorper tellus. Ut malesuada nisi sed vulputate blandit. Quisque lectus nulla, maximus vel condimentum vel, aliquet a nunc. Vestibulum leo purus, pellentesque vel leo sit amet, auctor varius arcu. Nam elit nibh, ultricies laoreet ullamcorper eget, lobortis et nunc. Fusce eros leo, gravida sit amet leo sit amet, efficitur sagittis sapien. Cras gravida ipsum tincidunt justo facilisis, id facilisis nisl feugiat. Ut dolor felis, dictum quis pharetra nec, dapibus a metus. Aenean rutrum arcu ac egestas iaculis. Ut a tincidunt lorem. Curabitur ante ante, consequat eu odio nec, porta tristique quam. Cras vel aliquet erat. Nullam elementum elit non nisi pharetra, ut pellentesque sapien finibus. Phasellus pretium vitae leo non rhoncus. Vestibulum neque arcu, posuere eget urna nec, vestibulum ultrices ipsum. Sed auctor dui enim, non commodo quam vehicula auctor. Etiam erat metus, sollicitudin quis vestibulum sed, commodo ut dolor.",
    features_categories: [
        {
            category_name: "Theme Parks",
            features: [
                "Magic Kingdom",
                "Universal",
                "Working Rides",
                "Tower of Terror"
            ]
        },
        {
            category_name: "Creative",
            features: [
                "Worldedit",
                "Head Database",
                "Armor Stand Tools"
            ]
        }
    ],
    online: true,
    players: 16
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