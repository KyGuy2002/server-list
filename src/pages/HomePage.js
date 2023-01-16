import React from 'react';

import '../scss/pages/home.scss';

import Filters from '../components/filters/Fiters.js';

import LargeCard from '../components/cards/LargeCard.js'
import '../scss/cards/large-card.scss';
import LinkCardSection from '../components/sections/LinkCardSection.js';
import GridCardSection from '../components/sections/GridCardSection.js';



export default function HomePage() {
    return (
    <>
        <div className='home-grid'>


            {/* Left Column */}
            <div className='filters-column'>

                {/* Filter Card */}
                <span className="section-label">Filters <i className="fa-solid fa-circle-info"></i></span>
                <Filters/>

            </div>


            {/* Center Column */}
            <section className='main-list-column'>

                {/* Discovery Card */}
                <span className="section-label">Discovery <i className="fa-solid fa-circle-info"></i></span>
                <LargeCard key={discoveryCardData[0].id} card={discoveryCardData[0]}/>

                {/* Link Cards Row */}
                <span className="section-label">Filters & Search <i className="fa-solid fa-circle-info"></i></span>
                <LinkCardSection cards={linkCards}/>

                {/* Main Server List Card Grid */}
                <span className="section-label">All Servers <i className="fa-solid fa-circle-info"></i></span>
                <GridCardSection cards={allServersCardData}/>

            </section>


            {/* Right Column */}
            <section className='sponsored-list-column'>

                {/* Sponsored Cards */}
                <span className="section-label">Sponsored <i className="fa-solid fa-circle-info"></i></span>
                <GridCardSection cards={sponsoredCardData}/>

            </section>


        </div>
    </>
    )
}



const linkCards = [
    {
        name: "Filter Wizard",
        description: "Find the perfect server",
        image: "filter-wizard-background.png"
    },
    {
        name: "All Filters",
        description: "Jump to filters",
    },
]

const allServersCardData = [
    {
        name: "MCBlockBuilds",
        ip: "mcblockbuilds.net",
        id: "1",
        accent: "#3a8c00",
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
        id: "2",
        accent: "#3a8c00",
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
        id: "3",
        accent: "#3a8c00",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus commodo sem eget ultricies. Donec scelerisque et nisl ac ultricies.",
        tags: [
            "Theme Parks",
            "Minigames",
            "Creative"
        ],
        online: true,
        players: 12
    },
    {
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
        players: 16
    },
    {
        name: "MCParks",
        ip: "mcilluminations.net",
        id: "5",
        accent: "#3a8c00",
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
        name: "Origin Realms",
        ip: "sunsetparks.net",
        id: "6",
        accent: "#3a8c00",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus commodo sem eget ultricies. Donec scelerisque et nisl ac ultricies.",
        tags: [
            "Theme Parks",
            "Minigames",
            "Creative"
        ],
        online: true,
        players: 12
    },
    {
        name: "Ubuntu",
        ip: "mcblockbuilds.net",
        id: "7",
        accent: "#3a8c00",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus commodo sem eget ultricies. Donec scelerisque et nisl ac ultricies.",
        tags: [
            "Theme Parks",
            "Survival",
            "Creative"
        ],
        online: true,
        players: 16
    }
]


const sponsoredCardData = [
    {
        name: "MCParks",
        ip: "mcblockbuilds.net",
        id: "5",
        accent: "#3a8c00",
        gradient_accent: "#c9e3a8",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus commodo sem eget ultricies. Donec scelerisque et nisl ac ultricies.",
        tags: [
            "Theme Parks",
            "Survival",
            "Creative",
            "Magic Kingdom",
            "Universal Orlando"
        ],
        online: true,
        players: 16
    },
    {
        name: "Origin Realms",
        ip: "sunsetparks.net",
        id: "6",
        accent: "#424242",
        gradient_accent: "#c4d7ff",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus commodo sem eget ultricies. Donec scelerisque et nisl ac ultricies.",
        tags: [
            "Theme Parks",
            "Minigames",
            "Creative"
        ],
        online: true,
        players: 12
    },
    {
        name: "MCBlockBuilds",
        ip: "mcblockbuilds.net",
        id: "1",
        accent: "#3a8c00",
        gradient_accent: "#c4d7ff",
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
        id: "2",
        accent: "#3a8c00",
        gradient_accent: "#c4d7ff",
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
        id: "3",
        accent: "#3a8c00",
        gradient_accent: "#c4d7ff",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus commodo sem eget ultricies. Donec scelerisque et nisl ac ultricies.",
        tags: [
            "Theme Parks",
            "Minigames",
            "Creative"
        ],
        online: true,
        players: 12
    },
    {
        name: "Imagine Fun",
        ip: "mcblockbuilds.net",
        id: "4",
        accent: "#3a8c00",
        gradient_accent: "#c4d7ff",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus commodo sem eget ultricies. Donec scelerisque et nisl ac ultricies.",
        tags: [
            "Theme Parks",
            "Survival",
            "Creative"
        ],
        online: true,
        players: 16
    },
]


const discoveryCardData = [
    {
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
        players: 16
    }
]