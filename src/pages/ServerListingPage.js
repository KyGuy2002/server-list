import React from 'react';
import CardTitle from '../components/cards/CardTitle.js'
import CardFeatures from '../components/cards/CardFeatures.js'
import CardStats from '../components/cards/CardStats.js'
import '../scss/cards/fullwidth-card.scss';

import Tags from '../components/cards/Tags.js'

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

        {/* Main Content Container - contains 2 columns, below server name row */}
        <div className='main-content-container'>

            {/* Server Stats/Specs Sidebar */}
            <section className='server-stats-sidebar'>
                <span className="section-label">Server Info <i className="fa-solid fa-circle-info"></i></span>
                
                <div className='card'>
                    <h1>Server Info</h1>

                    <Tags card={card}/>

                    <CardFeatures/>

                    <CardStats card={card}/>
                </div>

            </section>


            {/* Server Details/Description Column */}
            <section className='server-description-column'>
                <span className="section-label">Server Description <i className="fa-solid fa-circle-info"></i></span>

                <div className='card'>
                    <h1>Server Description</h1>

                    <p>{card.description}</p>
                </div>

            </section>

        </div>
    </div>
    )
}


const card = {
    name: "Imagine Fun",
    ip: "mcblockbuilds.net",
    id: "4",
    accent: "#3a8c00",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus commodo sem eget ultricies. Donec scelerisque et nisl ac ultricies.",
    tags: [
        "Theme Parks",
        "Survival",
        "Creative"
    ],
    online: true,
    players: 16,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec dolor ac libero scelerisque dictum. Suspendisse pulvinar vestibulum erat ut ultricies. Mauris mollis viverra felis nec lacinia. Duis sagittis mauris ac pulvinar ornare. Nullam sagittis interdum nibh a porttitor. Nullam tempor, urna nec gravida varius, nisl nunc elementum massa, ac tempor lectus mi vitae tellus. Nullam at augue sem. Nam condimentum nec sem quis consectetur. Quisque viverra in orci a tempus. Morbi augue diam, rhoncus sit amet orci ac, facilisis molestie eros. Vivamus leo ex, fringilla vitae metus sed, consequat ullamcorper tellus. Ut malesuada nisi sed vulputate blandit. Quisque lectus nulla, maximus vel condimentum vel, aliquet a nunc. Vestibulum leo purus, pellentesque vel leo sit amet, auctor varius arcu. Nam elit nibh, ultricies laoreet ullamcorper eget, lobortis et nunc. Fusce eros leo, gravida sit amet leo sit amet, efficitur sagittis sapien. Cras gravida ipsum tincidunt justo facilisis, id facilisis nisl feugiat. Ut dolor felis, dictum quis pharetra nec, dapibus a metus. Aenean rutrum arcu ac egestas iaculis. Ut a tincidunt lorem. Curabitur ante ante, consequat eu odio nec, porta tristique quam. Cras vel aliquet erat. Nullam elementum elit non nisi pharetra, ut pellentesque sapien finibus. Phasellus pretium vitae leo non rhoncus. Vestibulum neque arcu, posuere eget urna nec, vestibulum ultrices ipsum. Sed auctor dui enim, non commodo quam vehicula auctor. Etiam erat metus, sollicitudin quis vestibulum sed, commodo ut dolor."
}