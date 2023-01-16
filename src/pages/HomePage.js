import React from 'react';

import '../scss/pages/home.scss';

import Filters from '../components/filters/Fiters.js';

import FullwidthCardSection from '../components/sections/FullwidthCardSection.js';
import LargeCardSection from '../components/sections/LargeCardSection.js';
import GridCardSection from '../components/sections/GridCardSection.js';

export default function HomePage() {
    return (
    <>
        <div className='home-grid'>
            <div className='filters-section'>
                <span className="section-label">Filters <i className="fa-solid fa-circle-info"></i></span>
                <Filters/>
            </div>
            <section className='list'>
                <FullwidthCardSection section_name='Sponsored' cards={sponsoredCardData}/>
                <LargeCardSection section_name='Discovery' cards={discoveryCardData}/>
                <GridCardSection section_name='All Servers' cards={allServersCardData}/>
            </section>
        </div>
    </>
    )
}

const allServersCardData = [
    {
        name: "MCBlockBuilds",
        ip: "mcblockbuilds.net",
        id: "1",
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
    }
]


const discoveryCardData = [
    {
        name: "Imagine Fun",
        ip: "mcblockbuilds.net",
        id: "4",
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