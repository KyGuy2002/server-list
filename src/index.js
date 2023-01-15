import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/global/Header.js';
import FullwidthCardSection from './components/sections/FullwidthCardSection.js';
import GridCardSection from './components/sections/GridCardSection.js';
import Footer from './components/global/Footer.js';


const cardData = [
    {
        name: "MCBlockBuilds",
        ip: "mcblockbuilds.net",
        id: "mcblockbuilds",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus commodo sem eget ultricies. Donec scelerisque et nisl ac ultricies.",
        tags: [
            "Theme Parks",
            "Survival",
            "Creative"
        ],
        online: true,
        players: 16
    },
    {
        name: "MCIlluminations",
        ip: "mcilluminations.net",
        id: "mcblockbuilds",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus commodo sem eget ultricies. Donec scelerisque et nisl ac ultricies.",
        tags: [
            "Theme Parks",
            "Survival",
            "Manhunt"
        ],
        online: false,
        players: 3
    },
    {
        name: "Sunset Parks",
        ip: "sunsetparks.net",
        id: "mcblockbuilds",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus commodo sem eget ultricies. Donec scelerisque et nisl ac ultricies.",
        tags: [
            "Theme Parks",
            "Minigames",
            "Creative"
        ],
        online: true,
        players: 12
    }
]


function Root() {
    return (<>
        <Header/>
        <section className='list'>
            <FullwidthCardSection section_name='Sponsored' cards={cardData}/>
            <GridCardSection section_name='All Servers' cards={cardData}/>
        </section>
        <Footer/>
    </>)
}


// Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render (<Root/>)