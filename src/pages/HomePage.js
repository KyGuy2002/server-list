import React from 'react';
import useFetch from "react-fetch-hook";

import '../scss/pages/home.scss';

import Filters from '../components/filters/Fiters.js';

import ErrorModal from '../components/global/ErrorModal';

import LargeCard from '../components/cards/LargeCard.js'
import '../scss/cards/large-card.scss';
import LinkCardSection from '../components/sections/LinkCardSection.js';
import GridCardSection from '../components/sections/GridCardSection.js';


export default function HomePage() {

    // const data = undefined;
    // const error = undefined;

    const { data, error } = useFetch(
        "/api/server/list"
    );

    return (
        <div id="home-page">

            {error && <ErrorModal errorMessage={"Status: "+error.status + " Message: "+error.statusText}/>} {/* TODO Make Global? */}

            {/* Left Column */}
            <section className='filters-column'>

                {/* Filter Card */}
                <span className="section-label">Filters <i className="fa-solid fa-circle-info"></i></span>
                <Filters/>

            </section>


            {/* Center Column */}
            <section className='main-list-column'>
            <span className="section-label">Discovery <i className="fa-solid fa-circle-info"></i></span>
                <div style={{height: "440px", display: "flex", flexDirection: "column"}}>
                    {/* Discovery Card */}
                    
                    <LargeCard card={(data ? data.discovery_card : undefined)}/>

                    {/* Link Cards Row */}
                    <span className="section-label">Filters & Search <i className="fa-solid fa-circle-info"></i></span>
                    <LinkCardSection cards={linkCards}/>
                </div>

                {/* Main Server List Card Grid */}
                <span className="section-label">All Servers <i className="fa-solid fa-circle-info"></i></span>
                <GridCardSection cards={(data ? data.server_cards : undefined)}/>

            </section>


            {/* Right Column */}
            <section className='sponsored-list-column'>

                {/* Sponsored Cards */}
                <span className="section-label">Sponsored <i className="fa-solid fa-circle-info"></i></span>
                <GridCardSection cards={(data ? data.sponsored_cards : undefined)}/>

            </section>
        </div>
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